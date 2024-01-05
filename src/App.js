
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Tokenomics } from "./components/Tokenomics";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Projects } from './components/Projects';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Tokenomics />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
