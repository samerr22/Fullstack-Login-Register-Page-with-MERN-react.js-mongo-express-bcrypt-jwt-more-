import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './login';
import Register from './register';

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
   
    <Route path="/log" element={<Login/>}></Route>
    <Route path="/regi" element={<Register/>}></Route>
      
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
