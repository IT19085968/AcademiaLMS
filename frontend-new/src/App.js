import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/navBar/NavBar';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
     </Router>
    </div>
  );
}

export default App;
