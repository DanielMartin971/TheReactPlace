import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// These 3 are imported from the pages folder allowing connection 
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

// The fancy stuff for design properness
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
            <Route path='/' element={<About />} > </Route>
            <Route path='/contact' element={<Contact />}> </Route>
            <Route path='/project' element={<Projects />}> </Route>
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
