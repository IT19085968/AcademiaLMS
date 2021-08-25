import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navBar/NavBar";
import AddCourse from "./components/course/AddCourse";
import AddCategory from "./components/category/AddCategory";
import Category from "./components/category/Category";
import Course from "./components/course/Course";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import ApprovedUsers from "./components/admin/ApprovedUsers";
import PendingUsers from "./components/admin/Two";
import AddUsers from "./components/admin/Three";
import Footer from "./components/footer/Footer";
import EditCourse from "./components/course/EditCourse";
import EditCategory from "./components/category/EditCategory";

import ComBar from "./components/commonbars/ComBar";
import Exam from "./components/exams/Exam";
import AddExam from "./components/exams/AddExam";
import quizMain from "./components/quizMain/quizMain";
import SelectedCourse from "./components/course/SelectedCourse";

function App() {
  return (
    <div className="appClass">
      <Router>
        <ComBar />
        <section>
          <Switch>
            <Route path="/course" component={Course} />
            <Route path="/add-course" component={AddCourse} />
            <Route path="/category" component={Category} />
            <Route path="/add-category" component={AddCategory} />
            <Route path="/edit-category" component={EditCategory} />
            <Route path="//edit-category" component={EditCategory} />
            <Route path="/select-course" component={SelectedCourse} />
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/exams" component={Exam} />
            <Route path="/add-exam" component={AddExam} />
            <Route path="/quizMain" component={quizMain} />

            <Route path="/one" component={ApprovedUsers} />
            <Route path="/two" component={PendingUsers} />
            <Route path="/addUsers" component={AddUsers} />

            <Route path="/one" component={ApprovedUsers} />
            <Route path="/two" component={PendingUsers} />
            <Route path="/addUsers" component={AddUsers} />
          </Switch>
          <Footer />
        </section>
      </Router>
    </div>
    // <div className="App">
    //   <Router>
    //     <Navbar />
    //     <Sidebar />
    //     <section>
    //       <Switch>
    //         <Route path="/course" component={Course} />
    //         <Route path="/add-course" component={AddCourse} />
    //         <Route path="/category" component={Category} />
    //         <Route path="/add-category" component={AddCategory} />
    //         <Route path="/home" component={Home} />
    //         <Route path="/login" component={Login} />

    //         <Route path="/one" component={ApprovedUsers} />
    //         <Route path="/two" component={PendingUsers} />
    //         <Route path="/addUsers" component={AddUsers} />
    //       </Switch>
    //     </section>
    //   </Router>
    // </div>
  );
}

export default App;
