
import './App.css';
import About from './components/about/About.jsx';
import Banner from './components/banner/Banner.jsx';
import Preloader from './components/preloader/Preloader.jsx';
import Projects from './components/projects/Projects.jsx';
import Education from './components/education/Education.jsx';
import Skills from './components/skills/Skills.jsx';
import Contact from './components/contact/Contact.jsx';
import CustomCursor from './components/CustomCursor/CustomCursor.js';
function App() {
  return (
 <div className="App" style={{background:"black"}} >
       <Preloader/>
       <Banner />
       <About/>
       <Education/>
       <Projects/>
       <Skills/>
       <Contact/>
      <CustomCursor/>
 </div>
  );
}

export default App;
