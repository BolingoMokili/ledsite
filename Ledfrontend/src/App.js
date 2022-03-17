import './App.css';
import './index.css'
import Navbar from './component/Navbar/Navbar';
import Home from './pages/home/Home';
// import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>

        </Switch>
      </Router>
      <Home/>
    </div>
  );
}

export default App;
