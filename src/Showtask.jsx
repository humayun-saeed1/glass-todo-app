import { useState } from 'react'
import BasicModal from './Modal.jsx' 
import UpdateModal from './UpdateModal.jsx'

function ShowTask({ taskList, onDelete, onToggle,onUpdate }) {
  const [showModal, setShowModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [idToUpdate, setIdToUpdate] = useState(null);

  const handleDeleteClick = (id) => {
    setIdToDelete(id);
    setShowModal(true);
  }

  const handleUpdateClick = (id) => {
    setIdToUpdate(id);
    setShowUpdateModal(true);
  }

  const confirmUpdate = (newTask, newDate) => {
    onUpdate(idToUpdate, newTask, newDate);
    setShowUpdateModal(false);
    setIdToUpdate(null);
  }
  
  const confirmDelete = () => {
    onDelete(idToDelete);
    setShowModal(false);
    setIdToDelete(null);
  }

  if (taskList.length === 0) {
    return <p className="text-gray-400 text-center w-full py-4">No tasks yet.</p>
  }

  return (
    <>
      <ul>
        {taskList.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center bg-gray-800/50 backdrop-blur-md p-3 mb-2 rounded border border-white/5 hover:border-green-500/50 transition-all shadow-md">
            <div className="flex items-center">
              <input 
                  type="checkbox" 
                  checked={todo.done} 
                  onChange={() => onToggle(todo.id)} 
                  className="mr-3 w-5 h-5 accent-green-500 cursor-pointer"
              />
              <div className="flex flex-col">
                  <span className={`font-bold text-md ${todo.done ? "text-gray-500 line-through" : "text-white"}`}>
                      {todo.task}
                  </span>
                  <span className="text-xs text-gray-400">{todo.dueDate}</span>
              </div>
            </div>
            
            <button 
              onClick={() => handleDeleteClick(todo.id)}
              className="justify-end text-red-400 hover:bg-red-500/20 p-2 rounded-full transition-colors"
            >
              🗑️
            </button>
            <button onClick={() => handleUpdateClick(todo.id)} className="justify-end text-yellow-400 hover:bg-yellow-500/20 p-2 rounded-full transition-colors  ">
              ✏️
            </button>
          
          </li>
        ))}
      </ul>

      {showModal && (
        <BasicModal 
            onCancel={() => setShowModal(false)} 
            onConfirm={confirmDelete} 
        />
      )}
      {showUpdateModal && (
        <UpdateModal 
            onCancel={() => setShowUpdateModal(false)} 
            onConfirm={confirmUpdate} 
        />
      )}
    </>
  )
}

export default ShowTask