import { useEffect, useState } from 'react' 
import Home from './Home.jsx'
import Login from './Login.jsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import toast from 'react-hot-toast'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
  return localStorage.getItem('isLoggedIn') === 'true';
})
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

 const handleLogin = () => {
    setIsLoggedIn(true)
    localStorage.setItem('isLoggedIn', 'true')
  }
  const onLogout = () =>{
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    toast.success("See you later");
  } 

  return (
   <BrowserRouter>
      <Routes>
        
        <Route path="/Login" element={ 
            isLoggedIn ? <Navigate to="/" /> : <Login onlogin={handleLogin} /> 
        } />

       
        <Route path="/" element={
            isLoggedIn ? (
               <Home
                 addTask={addTask}
                 deleteTask={deleteTask}
                 toggleView={toggleView}
                 onUpdate={onUpdate}
                 view={view}
                 setView={setView}
                 tasksToShow={tasksToShow}
                 onLogout={onLogout}
               />
            ) : (
               <Navigate to="/Login" />
            )
        } />

      </Routes>
    </BrowserRouter>

  )
}
export default App