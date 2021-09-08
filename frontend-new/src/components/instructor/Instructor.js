import React from "react";
import axios from "axios";
//import "./Exam.css";
//import ViewQuiz from "../viewQuiz/viewQuiz";

class InstructorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [],
      Courses: [],
      name: "",
      email: "",
      contactNumber: "",
      id: "",
    };
  }

  componentWillMount() {
    axios.get("http://localhost:8080/instructors/").then((res) => {
      this.setState({
        instructors: res.data,
        id: "",
        name: "",
      });
    });
  }

//   viewTheQuiz(quizId) {
//     this.setState({
//       quizId: "61279e68495de239a7eccaca",
//     });
//   }

  render() {
    return (
      <div>
        <div className="rowClass">
          <div className="titlesClass md-6">
            <h3>All Instructors</h3>
          </div>
        </div>

        <div className="addClass ">
          <a class="btn btn-primary" href="/addInstructor" role="button">
            Add Instructor
          </a>
        </div>

        <br />

        <div className="container">
          <div class="search-container">
            <form action="/action_page.php">
              <input type="text" placeholder="Search.." name="search" />
              <button type="submit">
                <i class="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="examClass">
          <table className="table table-bordered tableClass">
            <thead>
              <tr>
                <th scope="col">Instructor Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Courses</th>
              </tr>
            </thead>

            <tbody>
              {this.state.instructors.map((instructor) => (
                <tr key={instructor.id}>
                  <td>{instructor.name}</td>
                  <td>{instructor.email}</td>
                  <td>{instructor.contactNumber}</td>
                  <td>{instructor.Courses}</td>
                  
                </tr>
              ))}
            </tbody>

          </table>
        </div>
        
      </div>
    );
  }
}

export default InstructorList;
