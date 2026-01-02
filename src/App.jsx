import { useEffect, useState } from 'react'
import './App.css'
import TodoList from './Todo.jsx'
import ShowTask from './Showtask.jsx' 
import { Toaster } from 'react-hot-toast'
function App() {
  
  const [todos, setTodos] = useState(() => {
      const savedTodos = localStorage.getItem('todos');
      return savedTodos ? JSON.parse(savedTodos) : [];
  })

  const [view, setView] = useState('todo')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTask = (newTask) => {
    setTodos([...todos, newTask])
  }

  const deleteTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleView = (id) => {
    setTodos(todos.map(todo => 
        todo.id === id ? { ...todo, done: !todo.done } : todo
    ))
  }
  const onUpdate = (id, newTask, newDate) => {
    // Update task logic here
    setTodos(todos.map(todo => 
        todo.id === id ? { ...todo, ...(newTask ? { task: newTask } : {}), ...(newDate ? { dueDate: newDate } : {}) } : todo
    ))
  }

  const tasksToShow = todos.filter(todo => {
    if(view === 'todo') return !todo.done
    if(view === 'done') return todo.done
    return true
  })

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-black flex flex-col items-center py-12'>
      <h1 className="text-3xl font-bold text-white mb-8">My Todos</h1>
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
      {/* --- THE MEGA GLASS CARD STARTS HERE --- */}
      <div className="w-full max-w-3xl bg-gray-900/60 backdrop-blur-xl border border-white/10  shadow-2xl overflow-hidden">
        
        {/* 1. TOP SECTION: The Form */}
        <div className="p-6">
           <TodoList onAdd={addTask} />
        </div>

        {/* 2. MIDDLE SECTION: The Divider & Tabs */}
        <div className="px-6">
            <div className="flex gap-6 border-b border-white/10 pb-2 mb-4">
              <button 
                  onClick={() => setView('todo')} 
                  className={`${view === 'todo' ? "text-green-400 border-green-400" : "text-gray-400 border-transparent"} border-b-2 pb-2 font-bold transition-all`}
              >
                  To Do
              </button>
              
              <button 
                  onClick={() => setView('done')} 
                  className={`${view === 'done' ? "text-green-400 border-green-400" : "text-gray-400 border-transparent"} border-b-2 pb-2 font-bold transition-all`}
              >
                  Done
              </button>
            </div>
        </div>

        {/* 3. BOTTOM SECTION: The List */}
        <div className="p-6 pt-0">
           <ShowTask taskList={tasksToShow} onDelete={deleteTask} onToggle={toggleView} onUpdate={onUpdate} />
        </div>

      </div>
      {/* --- CARD ENDS HERE --- */}
    </div>
  )
}
export default App