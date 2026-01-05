import { useState } from 'react'
import toast from 'react-hot-toast';

function TodoList({ onAdd }) { 
  const [task, setTask] = useState('')
  const [dueDate, setDueDate] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    
    // 1. Check if Task is empty
    if (!task.trim()){
      toast.error("Task title cannot be empty! 📝");
      return;
    }

    // 2. Check if Date is empty
    if (!dueDate) {
      toast.error("Please select a due date! 📅");
      return;
    }

    // 3. Check for Time Travel (Past Dates)
    const today = new Date().toLocaleDateString('en-CA');
    if (dueDate < today) {
      toast.error("Due date cannot be in the past! ⏳");
      return;
    }

    const newTask = {
      id: Date.now(),
      task: task,
      dueDate: dueDate,
      done: false
    }

    onAdd(newTask)
    toast.success("Task added successfully! 🚀");
    
    setTask('')
    setDueDate('')
  }

  return (
    <div>
      <h2 className='text-xl font-bold mb-4 text-white'>Add New Task:</h2>
      <form onSubmit={handleSubmit} className='mb-4 text-white'>
           
           {/* RESPONSIVE LAYOUT FIX: 
               - Mobile: flex-col (Stack vertically)
               - Desktop: md:flex-row (Sit side-by-side) 
           */}
           <div className="flex flex-col md:flex-row gap-4 items-end">
             
             {/* Task Input - Grows to fill space */}
             <div className="w-full">
                <label htmlFor="task" className="block text-sm font-semibold mb-1 text-gray-300">Task Title</label>
                <input 
                    type="text" 
                    id="task" 
                    value={task} 
                    onChange={(e) => setTask(e.target.value)} 
                    // Added 'text-base' to prevent iPhone zoom
                    className="w-full bg-gray-800/50 border border-white/10 rounded p-3 text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500" 
                    placeholder="Enter task..." 
                />
             </div>

             {/* Date Input - Full width on mobile, auto width on desktop */}
             <div className="w-full md:w-auto">
                <label htmlFor="dueDate" className="block text-sm font-semibold mb-1 text-gray-300">Due Date</label>
                <input 
                    type="date" 
                    id="dueDate" 
                    style={{colorScheme: 'dark'}} 
                    value={dueDate} 
                    onChange={(e) => setDueDate(e.target.value)} 
                    className="w-full bg-gray-800/50 border border-white/10 rounded p-3 text-base text-white focus:outline-none focus:ring-2 focus:ring-green-500" 
                />
             </div>

             {/* Button - Full width on mobile, auto width on desktop */}
             <button type="submit" className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded transition-colors whitespace-nowrap h-[50px]">
                ADD TASK
             </button>

             

           </div>
      </form>
    </div>
  )
}
export default TodoList