import './App.css';
import './index.css'
import Navbar from './component/Navbar/Navbar';
import Home from './pages/home/Home';
// import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import Who from './pages/who/Who';

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Navbar/>
        <Home/>
        <Who/>
        {/* <Switch>
          <Route exact path='/' component={<Home/>}/>
          <Route exact path='/who' component={<Who/>}/>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
