import './App.css';
import './index.css'
import Navbar from './component/Navbar/Navbar';
import Home from './pages/home/Home';
// import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Who from './pages/who/Who';
import What from './pages/what/What';
import Footer from './component/Footer/Footer'
// import Footer from './element/Footer/Footer';
import How from './pages/how/How';
import DashBoard from './adminTemplates/DashBoard';
import New from './adminTemplates/pages/new/New'
import Single from './adminTemplates/pages/single/Single';
import {userInputs , productInputs} from './formSource'

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/who' element={<Who/>}/>
        <Route path='/what' element={<What/>}/>
        <Route path='/how' element={<How/>}/>
        {/* <Route path='/dashboard' element={<DashBoard/>}/> */}
        <Route  path='/new' element={<New inputs={userInputs} />}/>
        <Route path='/single' element={<Single/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
