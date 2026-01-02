export default function BasicModal({ onCancel, onConfirm }) {
  return (
   
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-gray-900 border border-white/10 p-6 rounded-lg shadow-2xl max-w-sm w-full mx-4 text-center transform transition-all scale-100">
         
         <div className="mb-4 text-red-500 text-4xl">⚠️</div>
         
         <h3 className="text-xl font-bold text-white mb-2">Delete Task?</h3>
         <p className="text-gray-400 mb-6">Are you sure you want to remove this task? This action cannot be undone.</p>
         
         <div className="flex justify-center gap-4">
            <button 
              onClick={onCancel}
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded font-semibold transition-colors"
            >
              Cancel
            </button>
            
            <button 
              onClick={onConfirm}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-semibold transition-colors"
            >
              Delete
            </button>
         </div>

      </div>
    </div>
  )
}