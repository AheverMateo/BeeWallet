import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(<>
  <Route path='/' errorElement={<div>no found</div>}>
    <Route errorElement={<div>404</div>}>
      <Route index element={<div>default page</div>} />
      <Route path='/login' element={<div>login page</div>} />
      <Route path='/register' element={<div>register page</div>} />
    </Route>
  </Route>
</>));

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
