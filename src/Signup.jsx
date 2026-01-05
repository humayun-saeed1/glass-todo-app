// Signup.jsx
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup({ onSignup }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Renamed to handleSubmit to match the form
    function handleSubmit(e) { 
        e.preventDefault();

        if (username && password) {
            // Check success logic properly
            const isSuccess = onSignup(username, password);
            
            if (isSuccess) {
                navigate("/Login");
            }
        } else {
            toast.error("Please fill all the fields");
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-black flex flex-col items-center py-12">
            <Toaster position="top-center" />
            <h1 className="text-3xl font-bold text-white mb-8">Sign Up Page</h1>
            
            {/* Call the corrected function name */}
            <form onSubmit={handleSubmit} className="bg-gray-900/60 backdrop-blur-xl border border-white/10 shadow-2xl p-6 rounded-xl">
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="New Username" className="w-full p-3 mb-4 bg-gray-800 text-white rounded-lg" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New Password" className="w-full p-3 mb-4 bg-gray-800 text-white rounded-lg" />
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">Create Account</button>
            </form>
        </div>
    )
}
export default Signup