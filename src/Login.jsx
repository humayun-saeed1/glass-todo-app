import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { Link } from 'react-router-dom';

function Login({ onlogin }) { // onlogin is the handleLogin function from App
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        // Don't check "admin" here. Send data to App.jsx to check!
        onlogin(username, password); 
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-black flex flex-col items-center py-12">
            <Toaster position="top-center" />
            <h1 className="text-3xl font-bold text-white mb-8">Login Page</h1>
            
            <form onSubmit={handleSubmit} className="bg-gray-900/60 backdrop-blur-xl border border-white/10 shadow-2xl p-6 rounded-xl">
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="w-full p-3 mb-4 bg-gray-800 text-white rounded-lg" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full p-3 mb-4 bg-gray-800 text-white rounded-lg" />
                <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg">Login</button>
                
                {/* Fixed the nested form issue. Just use a div here */}
                <div className="mt-4 text-center">
                    <Link to="/signup" className="text-green-400 hover:text-green-300 text-sm">
                        Don't have an account? Sign up
                    </Link>
                </div>
            </form>
        </div>
    )
}
export default Login