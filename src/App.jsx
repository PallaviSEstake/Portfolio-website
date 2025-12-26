// import NavBar from './components/NavBar';
// import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Skills from './components/Skill';
// import { Route, Routes } from 'react-router-dom';
// import { HashRouter } from 'react-router-dom';



// function App() {
//   return (
//     <>
     
//       <HashRouter>
//          <NavBar />
//          <Routes>
//           <Route path="/" element={<Home/>}/>
//           <Route path="/About" element={<About/>}/>
//           <Route path="/Skills" element={<Skills/>}/>
//           <Route path="/About" element={<About/>}/> 
//           <Route path="/Projects" element={<Projects/>}/>
//           <Route path="/Contact" element={<Contact/>}/>

//         </Routes>

//       </HashRouter>
      
     
//     </>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

