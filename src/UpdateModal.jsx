import { useState } from "react";

export default function UpdateModal({ onCancel, onConfirm }) {
    const [newtask, setNewTask] = useState("");
    const [newdate, setNewDate] = useState("");
    
    return (   
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
            <div className="bg-gray-900 border border-white/10 p-6 rounded-lg shadow-2xl w-full max-w-sm">
                
                <h2 className="text-xl font-bold mb-2 text-white">Update Task</h2>
                <p className="text-gray-400 mb-6 text-sm">Edit your task details here.</p>
                
              
                <div className="flex flex-col gap-4">
                    <input 
                        type="text" 
                        placeholder="New task name..."
                        value={newtask} 
                        onChange={(e) => setNewTask(e.target.value)}
                        // Added 'w-full' and 'text-base' (prevents iPhone zoom)
                        className="w-full px-4 py-3 bg-gray-800 border border-white/10 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-base" 
                    />
                    <input 
                        type="date" 
                        style={{colorScheme: 'dark'}}
                        value={newdate} 
                        onChange={(e) => setNewDate(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-800 border border-white/10 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-base" 
                    />
                </div>

                <div className="flex justify-end gap-3 mt-8">
                    <button 
                        onClick={onCancel} 
                        className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={() => onConfirm(newtask, newdate)} 
                        className="px-6 py-2 bg-green-500 hover:bg-green-600 text-black font-bold rounded transition-colors"
                    >
                        Update
                    </button>
                </div>

            </div>
        </div>
    )
}