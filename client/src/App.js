import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/home';
import Findjobs from './components/findJobs';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/findJobs" component ={Findjobs}></Route>
      </Router>
    </div>
  );
}

export default App;
