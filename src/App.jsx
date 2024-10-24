import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Check this path is correct
import Footer from './components/Footer'; // Check this path is correct
import ChatbotComponent from './components/chatbot'; // Check this path is correct
import Home from './Pages/Home'; // Check paths for all pages
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import './App.css'; // Ensure CSS is loaded

function App() {
  return (
    <Router>
      <Navbar /> {/* Make sure Navbar is rendered */}
      <ChatbotComponent /> {/* Ensure ChatbotComponent is included */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Ensure Home is set for "/" path */}
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} /> {/* Ensure Skills has a route */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> {/* Ensure Footer is rendered */}
    </Router>
  );
}

export default App;
