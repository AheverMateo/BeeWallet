import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import Home from './app/home';
import Dashboard from './app/dashboard';
import Login from './app/login';
import Register from './app/register';
import User from "./app/ui/user"
import './global.css';
import CVU from './app/dashboard/CVU';
import Transferencia from './app/dashboard/Transferencia';
import Cantidad from './app/dashboard/Transferencia/Cantidad';
import Exitosa from './app/dashboard/Transferencia/Exitosa';

const router = createBrowserRouter(createRoutesFromElements(<>
  <Route errorElement={<div>not found</div>}>
    <Route path='/' element={<Home />} errorElement={<div>404</div>}>
      <Route index element={<div>default page</div>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/user' element={<User/>}/>
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<Dashboard />}>
        <Route path='/dashboard/CVU' element={<CVU/>}/>
        <Route path='/dashboard/transference' element={<Transferencia/>} />
         <Route path='/dashboard/transference/amount' element={<Cantidad/>}/>
         <Route path='/dashboard/transference/amount/successful' element={<Exitosa/>}/>
       {/* <Route index element={<div>Dashboard</div>} />*/}        
       <Route path='profile' element={<div>Profile</div>} />
        <Route path='settings' element={<div>Settings</div>} />
      </Route>
    </Route>
  </Route>
</>));

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
