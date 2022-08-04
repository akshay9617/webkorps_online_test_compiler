import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Protected from "./components/auth/Protected"
import Login from "./components/auth/Login";
import Dashbord from "./components/admin/Dashbord";
import { useSelector } from "react-redux";
import Test from "./components/user/Test";

function App() {
  
 const [isLoggedIn, setisLoggedIn] = useState(null);

 const auth=useSelector((auth)=>auth.authred.value);
 console.log('auth')
 return (
 <BrowserRouter>
 <div>
 <Routes>
    <Route path='/' element={<Login />} />
    <Route path="/test"  element={
     <Protected isLoggedIn={auth}>
        <Test/>
     </Protected>}/>
    <Route path='/dashbord'
       element={
     <Protected isLoggedIn={auth}>
      <Dashbord/>
     </Protected>
 }
 />

 </Routes>
 </div>
 </BrowserRouter>
 );
}
export default App;