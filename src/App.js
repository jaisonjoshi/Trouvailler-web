import {
  BrowserRouter,
  Routes,
  Route,
  Ridirect,
  Switch,
}from "react-router-dom";
import Home from "./Pages/home/Home.jsx";
import IntroToBid from "./Pages/Bid/IntroBid.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/what-is-bid" element={<IntroToBid/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
