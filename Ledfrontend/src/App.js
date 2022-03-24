import './App.css';
import './index.css'
import Navbar from './component/Navbar/Navbar';
import Home from './pages/home/Home';
// import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import Who from './pages/who/Who';
import What from './pages/what/What';
import Footer from './component/Footer/Footer';
import How from './pages/how/How';

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Navbar/>
        <hr />
        <Home/>
        <hr />
        <Who/>
        <hr />
        <What/>
        <hr />
        <How/>
        <hr />
        <Footer/>
        {/* <Switch>
          <Route exact path='/' component={<Home/>}/>
          <Route exact path='/who' component={<Who/>}/>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
