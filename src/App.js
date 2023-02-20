import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const user = localStorage.getItem('user')

  const ProtectecRoutes = ({ children }) => {
    if (!user) return <Navigate to='/login' />
    else return children
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={
          <ProtectecRoutes>
            <Home />
          </ProtectecRoutes>} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
