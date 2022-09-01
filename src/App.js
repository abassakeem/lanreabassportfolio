import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Nav from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from './components/banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <AboutMe/>
      
      <Footer />
    </div>
    
    
  );
}

export default App;
