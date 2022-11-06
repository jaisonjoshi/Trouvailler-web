import {
  BrowserRouter,
  Routes,
  Route,
  Ridirect,
  Switch,
}from "react-router-dom";
import Home from "./Pages/home/Home.jsx";
import IntroToBid from "./Pages/Bid/IntroBid.jsx";
import BidStatus from "./Pages/Bid/BidStatus.jsx";
import Package from "./Pages/DetailViews/Package.jsx";
import Hotel from "./Pages/DetailViews/Hotel.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/what-is-bid" element={<IntroToBid/>}/>
        <Route path="/bid-status" element={<BidStatus/>}/>
        <Route path="/package" element={<Package/>}/>
        <Route path="/hotel" element={<Hotel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
