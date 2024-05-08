import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardInicio from './views/DashboardInicio/DashboardInicio';
import 'tailwindcss/tailwind.css';

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        {/* Define tus rutas aquí */}
        <Route path="/dashboard" element={<DashboardInicio />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
