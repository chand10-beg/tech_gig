import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/home';
import Findjobs from './components/findJobs';
import AdminLogin from './components/adminLogin';
import AdminDasboard from './components/adminDasboard';
import Job from './components/job';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/findJobs" component ={Findjobs}></Route>
        <Route exact path="/adminLogin" component={AdminLogin}></Route>
        <Route exact path ='/admin/dasboard' component={AdminDasboard}></Route>
        <Route exact path="/findJobs/:jobId" component={Job}></Route>
      </Router>
    </div>
  );
}

export default App;
