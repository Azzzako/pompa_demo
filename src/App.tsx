import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Admin from './admin/Admin'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
