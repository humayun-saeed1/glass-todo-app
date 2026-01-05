import { useEffect, useState } from 'react' 
import Home from './Home.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function App() {
  // 1. TRACK THE USER (Not just true/false)
  const [currentUser, setCurrentUser] = useState(() => {
     return localStorage.getItem('currentUser'); // Returns 'ali', 'sara', or null
  });

  // 2. USERS LIST (The Database)
  const [users, setUsers] = useState(() => {
      const saved = localStorage.getItem('users');
      return saved ? JSON.parse(saved) : [];
  });

  // 3. TODOS (Start empty, load later)
  const [todos, setTodos] = useState([]); 
  const [view, setView] = useState('todo');

  // --- EFFECT 1: Load User's Data when they login ---
  useEffect(() => {
    if (currentUser) {
        // Dynamic Key: 'todos_ali', 'todos_admin', etc.
        const userKey = `todos_${currentUser}`; 
        const savedTodos = localStorage.getItem(userKey);
        
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        } else {
            setTodos([]); // New user gets empty list
        }
    }
  }, [currentUser]); // Run this whenever currentUser changes

  // --- EFFECT 2: Save User's Data when they add/edit tasks ---
  useEffect(() => {
    if (currentUser) {
        const userKey = `todos_${currentUser}`;
        localStorage.setItem(userKey, JSON.stringify(todos));
    }
  }, [todos, currentUser]);

  // --- EFFECT 3: Persist Users List ---
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);


  // --- HANDLERS ---

  const handleLogin = (username, password) => {
    const foundUser = users.find(u => u.username === username && u.password === password);
    
    if (foundUser || (username === "admin" && password === "pass")) { // Admin backdoor kept
        setCurrentUser(username);
        localStorage.setItem('currentUser', username); // Remember who is logged in
        toast.success(`Welcome, ${username}!`);
        return true;
    } else {
        toast.error("Invalid credentials");
        return false;
    }
  }

  const handlenewuser = (newUsername, newPassword) => {
     if (users.some(u => u.username === newUsername)) {
          toast.error("User already exists!");
          return false;
     }
     const newUser = { username: newUsername, password: newPassword };
     setUsers([...users, newUser]);
     toast.success("Account created! Please login.");
     return true;
  }

  const onLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser'); // Forget the user
    setTodos([]); // Clear the screen
    toast.success("See you later");
  } 

  // --- TASK LOGIC (Same as before) ---
  const addTask = (newTask) => setTodos([...todos, newTask]);
  const deleteTask = (id) => setTodos(todos.filter(t => t.id !== id));
  const toggleView = (id) => setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
  const onUpdate = (id, newTask, newDate) => {
    setTodos(todos.map(t => t.id === id ? { ...t, ...(newTask && { task: newTask }), ...(newDate && { dueDate: newDate }) } : t));
  };
  
  const tasksToShow = todos.filter(t => {
    if(view === 'todo') return !t.done;
    if(view === 'done') return t.done;
    return true;
  });

  return (
   <BrowserRouter>
      <Routes>
        
        <Route path="/Login" element={ 
            currentUser ? <Navigate to="/" /> : <Login onlogin={handleLogin} /> 
        } />
        
        <Route path ="/Signup" element={
            currentUser ? <Navigate to="/"/> : <Signup onSignup={handlenewuser} />
        } />

        <Route path="/" element={
            currentUser ? (
               <Home
                 username={currentUser} // Pass name to Home if you want to display "Hello Ali"
                 addTask={addTask}
                 deleteTask={deleteTask}
                 toggleView={toggleView}
                 onUpdate={onUpdate}
                 view={view}
                 setView={setView}
                 tasksToShow={tasksToShow}
                 onLogout={onLogout}
                 currentUser={currentUser}
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