import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/navBar/NavBar';
import AddCourse from './components/course/AddCourse';
import AddCategory from './components/category/AddCategory';
import Category from './components/category/Category';
import Course from './components/course/Course';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <section>
        <Switch>
        <Route path="/course" component={Course}/>
          <Route path="/add-course" component={AddCourse}/>
          <Route path="/category" component={Category}/>
          <Route path="/add-category" component={AddCategory}/>
          <Route path="/home" component={Home}/>
        </Switch>
      </section>
     </Router>
    </div>
  );
}

export default App;
