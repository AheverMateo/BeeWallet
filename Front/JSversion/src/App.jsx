import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardInicio from "./views/DashboardInicio/DashboardInicio";
import "tailwindcss/tailwind.css";
import User from "./Components/User";
import Login from "./views/Login/login";
import Register from "./views/Register/Register";
import Register8 from "./views/Register/Register8";
import Register9 from "./views/Register/Register9";
import Register7 from "./views/Register/Register7";
import Password from "./views/Login/Password";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Define tus rutas aquí */}
          <Route path="/dashboard" element={<DashboardInicio />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register7" element={<Register7/>} />
          <Route path="/register8" element={<Register8/>} />
          <Route path="/register9" element={<Register9/>} />
          <Route path="/password" element={<Password/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
