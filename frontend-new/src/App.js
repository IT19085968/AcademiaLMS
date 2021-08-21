import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/navBar/NavBar';
import AddCourse from './components/course/AddCourse';
import AddCategory from './components/category/AddCategory';
import Category from './components/category/Category';
import Course from './components/course/Course';
import Home from './components/home/Home';
import Login from './components/login/Login';
import ApprovedUsers from './components/admin/ApprovedUsers';
import PendingUsers from './components/admin/Two';
import AddUsers from './components/admin/Three';
import Footer from './components/footer/Footer';

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
          <Route path="/login" component ={Login}/>
          
          <Route path="/one" component ={ApprovedUsers}/>
          <Route path="/two" component ={PendingUsers}/>
          <Route path="/addUsers" component ={AddUsers}/>


        </Switch>
        <Footer/>
      </section>
     </Router>
    </div>
  );
}

export default App;
