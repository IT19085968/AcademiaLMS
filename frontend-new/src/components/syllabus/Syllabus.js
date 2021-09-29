import React from "react";
import axios from "axios";
import "./Syllabus.css";

class Syllabus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

        syllabuses:[],
        courseId: "",
        courseName: "",
        instructorName: "",
        numberOfLessons: 0
    };
  }

  componentWillMount() {
    axios.get("http://localhost:8080/syllabus/").then((res) => {
      this.setState({

        syllabuses: res.data,

      });
    });
  }


  render() {
    return (
      <div>
        <div className="rowClass">
          <div className="titlesClass md-6">
            <h3>Syllabus details</h3>
          </div>
        </div>
        <div className="addClass">
          {/* <button type="submit" className="btn btn-primary">
            Add Exam
          </button> */}
          <a class="btn btn-primary" href="/add-syllabus" role="button">
            Add Syllabus
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
                <th scope="col">Course Name</th>
                <th scope="col">Intructor Name</th>
                <th scope="col">Number of lessons</th>
              </tr>
            </thead>
            <tbody>
              {this.state.syllabuses.map((syllabus) => (
                <tr key={syllabus.id}>
                  <td>{syllabus.courseName}</td>
                  <td>{syllabus.instructorName}</td>
                  <td>{syllabus.numberOfLessons}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
    );
  }
}

export default Syllabus;
