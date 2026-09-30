import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import DarkHome from './landing/dark/DarkHome'
import StreetHome from './landing/street/StreetHome'
import Admin from './admin/Admin'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home variant="light" />} />
        <Route path="/pompa" element={<Home variant="light" />} />
        <Route path="/pompa-dark" element={<DarkHome />} />
        <Route path="/pompa-street" element={<StreetHome />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Home variant="light" />} />
      </Routes>
    </BrowserRouter>
  )
}
