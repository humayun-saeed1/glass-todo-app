import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
function Login({ onlogin }){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        if (username === "admin" && password === "password"){
            onlogin();
        }
        else{
            toast.error("Invalid credentials. Please try again.");
        }
    }
    return(
        
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-black flex flex-col items-center py-12">
            <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
            },
        }}
      />

            <h1 className="text-3xl font-bold text-white mb-8">Login Page</h1>
            <form action="" onSubmit={handleSubmit} className="bg-gray-900/60 backdrop-blur-xl border border-white/10 shadow-2xl p-6 ">
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="w-full p-3 mb-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full p-3 mb-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
                <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">Login</button>
            </form>
        </div>
    )
}
export default Login