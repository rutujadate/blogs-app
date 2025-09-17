import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Register from './Components/Register/Register';
import Title from './Components/Title/Title';
import Blogs from './Components/Blogs/Blogs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    < Router>
      <ToastContainer position="top-center" />

      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/title/:id?' element={<Title />} />
        <Route path='/blogs' element={<Blogs />} />
      </Routes>
    </Router>

  );
}

export default App;
