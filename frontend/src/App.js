import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Homepage from './components/homepage/homepage';
import Register from './components/register/register';

function App() {
  return (
   <>
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    <ToastContainer/>
  </Router>
   </>
  );
}

export default App;
