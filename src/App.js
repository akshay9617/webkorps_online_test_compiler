import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
// import Navbar from "./Navbar";
import Protected from "./components/auth/Protected"
import Login from "./components/auth/Login";
// import dashbord from "./About";
import Dashbord from "./components/admin/Dashbord";
import { useSelector } from "react-redux";
function App() {
  
 const [isLoggedIn, setisLoggedIn] = useState(null);

 const auth=useSelector((auth)=>auth.authred.value);
 return (
 <BrowserRouter>
 <div>
 <Routes>
 <Route path='/' element={<Login />} />
 <Route path='/dashbord'
 element={
 <Protected isLoggedIn={auth}>
 <Dashbord />
 </Protected>
 }
 />

 </Routes>
 </div>
 </BrowserRouter>
 );
}
export default App;