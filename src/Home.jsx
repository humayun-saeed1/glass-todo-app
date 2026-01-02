import { Toaster } from 'react-hot-toast'
import TodoList from './Todo.jsx'
import ShowTask from './Showtask.jsx' 

export default function Home({ addTask, deleteTask, toggleView, onUpdate, view, setView, tasksToShow,onLogout }) {
    return(

         <div className='min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-black flex flex-col items-center py-12'>
     {/* HEADER CONTAINER: Wraps Title and Button */}
    <div className="w-full max-w-3xl flex justify-between items-center mb-8 px-4">
  
    <h1 className="text-3xl font-bold text-white">
      My Todos
    </h1>

    <button onClick={onLogout} className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg text-sm transition-all border border-red-400/30">
    Logout
    </button>

</div>
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