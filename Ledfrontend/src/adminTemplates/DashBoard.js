import Home from './pages/home/Home';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import {userInputs , productInputs} from './formSource'

function DashBoard() {
  return (
    <div className="App" id='dashboard' >
      <Router>
        {/* <Navbar/> */}
        <Switch>
          <Route path='/'>
            <Route index component={<Home/>} />
            <Route path='login' component={<Login/>} />
            <Route path='users'>
              <Route index component={<List/>} />
              <Route path=':userId' component={<Single/>} />
              <Route path='new' component={<New inputs={userInputs} title='Add a new user' />} />
            </Route>
            <Route path='products'>
              <Route index component={<List/>} />
              <Route path=':productId' component={<Single/>} />
              <Route path='new' component={<New inputs={productInputs} title='Add a new products' />} />
            </Route>
          </Route>
        </Switch>
        {/* <Sidebar/> */}
      </Router>
    </div>
  );
}

export default DashBoard;
