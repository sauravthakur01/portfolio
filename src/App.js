// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About'
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <> 
    <main  className="text-gray-400 bg-gray-900 body-font">
    
    <Navbar />
    <About />
    <Projects />
    <Skills />
    <Contact /> 
  </main>
    </>
  );
}

// <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

export default App;
