import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
// <Route path="/" element={currentUser ? <Navigate to="/home" /> : <Login />} />
import Home from './pages/Home'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
