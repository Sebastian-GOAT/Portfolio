import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Projects from './Pages/Projects/Projects.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Technologies from './Pages/Technologies/Technologies.jsx';

function App() {

  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/technologies' element={<Technologies />} />
      </Routes>
  );
}

export default App;