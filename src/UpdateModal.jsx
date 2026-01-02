import { useState } from "react";
export default function UpdateModal({ onCancel, onConfirm }) {
    const [newtask, setNewTask] = useState("");
    const [newdate, setNewDate] = useState("");
    
    return (  
        <>  
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4 text-white">Update Task</h2>
                <p className="text-gray-300 mb-4">Edit your task details here.</p>
                <div className="flex justify-end gap-2">
                    <input 
                        type="text" 
                        value={newtask} 
                        onChange={(e) => setNewTask(e.target.value)}
                        className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors" 
                    />
                    <input 
                        type="date" 
                        value={newdate} 
                        onChange={(e) => setNewDate(e.target.value)}
                        className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors" 
                    />
                </div>
                <div className="flex justify-end gap-2 mt-4">
                    <button onClick={onCancel} className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors">Cancel</button>
                    <button onClick={() => onConfirm(newtask, newdate)} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition-colors">Update</button>
                </div>
            </div>
        </div>
        </>

    )
}