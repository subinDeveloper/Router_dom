import { Routes,Route } from "react-router-dom"; 
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Stats from "./Pages/Stats";
import Gallery from "./Pages/Gallery";
import About from "./Pages/About";
import Rejister from "./Pages/Rejister";
function App() {
  return (
  <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/About" element={<About/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="*" element={<Error/>}/>
<Route path="/Gallery" element={<Gallery/>}/>
<Route path="/Contact" element={<Contact/>}/>
<Route path="/Blog" element={<Blog/>} />
<Route path="/Stats" element={<Stats/>}/>
<Route path="/Rejister" element={<Rejister/>}/>

  </Routes> 
  );
}

export default App;
