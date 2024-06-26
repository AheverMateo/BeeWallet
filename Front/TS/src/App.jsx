import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./app/home";
// import LandingPage from "./app/LandingPage";
import Dashboard from "./app/dashboard";
import Register from "./app/register";
import User from "./app/ui/user";
import "./global.css";
import CVU from "./app/dashboard/CVU";
import Transferencia from "./app/dashboard/Transferencia";
import Register7 from "./app/Register/Register7";
import Cantidad from "./app/dashboard/Transferencia/Cantidad";
import Exitosa from "./app/dashboard/Transferencia/Exitosa";
import Register5 from "./app/Register/Register5";
import Register3 from "./app/Register/Register3";
import Register18 from "./app/Register/Register18";
import Register21 from "./app/Register/Register21";
//import Register8 from "./app/Register/Register8";
import Register9 from "./app/Register/Register9";
import Login from "./app/login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route errorElement={<div>not found</div>}>
        <Route
          index
          path="/"
          element={<Home />}
          errorElement={<div>404</div>}
        />
        {/* <Route index element={<LandingPage />} /> */}
        <Route path="/login" element={<Login/>} />
          <Route path="/Register7" element={<Register7/>} />
          <Route path="/Register9" element={<Register9/>} />
        <Route path="/user" element={<User />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/auth" element={<Register3 />} />
        <Route path="/register/1" element={<Register5 />} />
        <Route path="/register/5" element={<Register18 />} />
        <Route path="/register/21" element={<Register21 />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/CVU" element={<CVU />} />
          <Route path="/dashboard/transference" element={<Transferencia />} />
          <Route path="/dashboard/transference/amount" element={<Cantidad />} />
          <Route
            path="/dashboard/transference/amount/successful"
            element={<Exitosa />}
          />
          {/* <Route index element={<div>Dashboard</div>} />*/}
          <Route path="profile" element={<div>Profile</div>} />
          <Route path="settings" element={<div>Settings</div>} />
        </Route>
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
