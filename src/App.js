import {
  BrowserRouter,
  Routes,
  Route,
  Ridirect,
  Switch,
}from "react-router-dom";
import Bidform from "./Pages/bidform/bidform.jsx";
import Home from "./Pages/home/Home.jsx";
import Login from "./Pages/login/login.jsx";
import Signup from "./Pages/signup/signup.jsx";
import List from "./Pages/list/list.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/bidform" element={<Bidform/>}/>
        <Route path="/list" element={<List/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
