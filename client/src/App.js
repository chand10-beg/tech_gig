import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Route to="/" component={Home}></Route>
      </Router>
    </div>
  );
}

export default App;
