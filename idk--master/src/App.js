import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";

import List from "./pages/list/List";
import List2 from "./pages/list/List2";
import Location1 from "./pages/list/Location1";
import Location2 from "./pages/list/Location2";
import Location3 from "./pages/list/Location3";
import Login from "./pages/login/Login";
import Events from "./pages/events/Events";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/events" element={<List/>}/>
        <Route path="/list" element={<List2/>}/>
        <Route path="/hackathon" element={<Location1/>}/>
        <Route path="/coding" element={<Location2/>}/>
        <Route path="/quiz" element={<Location3/>}/>
        <Route path="/events/:id" element={<Events/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
