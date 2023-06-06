import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Info from './pages/Info'
import Calhas from './pages/Calhas'
import Algerosas from './pages/Algerosas'
import Coifas from './pages/Coifas'
import Colarinho from './pages/Colarinho'
import Chamines from './pages/Chamines'
import Coberturas from './pages/Coberturas'
import Manutencao from './pages/Manutencao'
import Others from './pages/Others'
import Rufos from './pages/Rufos'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/information" element={<Info />} />
        <Route path="/calhas" element={<Calhas />} />
        <Route path="/algerosas" element={<Algerosas />} />
        <Route path="/coifas" element={<Coifas />} />
        <Route path="/colarinho" element={<Colarinho />} />
        <Route path="/chamines" element={<Chamines />} />
        <Route path="/coberturas" element={<Coberturas />} />
        <Route path="/manutencao" element={<Manutencao />} />
        <Route path="/rufos" element={<Rufos />} />
        <Route path="/others" element={<Others />} />
      </Routes>
    </Router>
  );
}

export default App;