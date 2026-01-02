import { useState } from 'react'
import toast from 'react-hot-toast';

function TodoList({ onAdd }) { 
  const [task, setTask] = useState('')
  const [dueDate, setDueDate] = useState('')

  function validate(task, dueDate) {
  if (!task.trim()) {
    alert("Task title cannot be empty.");
    return false;
  } ;
  if (!dueDate) {
    alert("Please select a due date.");
    return false;
  };
  return true;
}


  function handleSubmit(e) {
    e.preventDefault()
    if (!task){
      toast.error("Task title cannot be empty.");
      return;
    }
    if(!validate(task, dueDate)) return; 
    const newTask = {
      id: Date.now(),
      task: task,
      dueDate: dueDate,
      done: false
    }
    const today = new Date().toLocaleDateString('en-CA');
    if (dueDate && dueDate < today) {
      alert("Due date cannot be in the past.");
      return;
    }

    onAdd(newTask)
    toast.success("Task added successfully!");
    setTask('')
    setDueDate('')
  }

  return (
   
    <div>
      <h2 className='text-xl font-bold mb-4 text-white'>Add New Task:</h2>
      <form onSubmit={handleSubmit} className='mb-4 text-white'>
           <div className="grid grid-cols-3 gap-4">
             <div>
                <label htmlFor="task" className="block text-sm font-semibold mb-1 text-gray-300">Task Title</label>
                {/* Updated Input: Dark background, light text */}
                <input 
                    type="text" 
                    id="task" 
                    value={task} 
                    onChange={(e) => setTask(e.target.value)} 
                    className="w-full bg-gray-800/50 border border-white/10 rounded p-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500" 
                    placeholder="Enter task..." 
                />
             </div>
             <div>
                <label htmlFor="dueDate" className="block text-sm font-semibold mb-1 text-gray-300">Due Date</label>
                <input 
                    type="date" 
                    id="dueDate" 
                    style={{colorScheme: 'dark'}} 
                    value={dueDate} 
                    onChange={(e) => setDueDate(e.target.value)} 
                    className="w-full bg-gray-800/50 border border-white/10 rounded p-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500" 
                />
             </div>
             <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-2 rounded mt-6 transition-colors h-10">
                ADD TASK
             </button>
           </div>
      </form>
    </div>
  )
}
export default TodoList