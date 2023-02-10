import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoute from './Routes/AppRoute';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
           <Navbar/>
              <AppRoute/>
           <Footer/>
      </div>
    </Router>
  );
}

export default App;
