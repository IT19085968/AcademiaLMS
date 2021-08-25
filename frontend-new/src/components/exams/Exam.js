import React from "react";
import axios from "axios";
import "./Exam.css";

class Exam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exams: [],
      courseId: "",
      examDate: "",
      startTime: "",
      type: "",
      id: "",
      title: "",
    };
  }

  componentWillMount() {
    axios.get("http://localhost:8080/exams/").then((res) => {
      this.setState({
        exams: res.data,
        id: "",
        name: "",
      });
    });
  }

  render() {
    return (
      <div>
        <div className="rowClass">
          <div className="titlesClass md-6">
            <h3>All Exams</h3>
          </div>
        </div>
        <div className="addClass ">
          {/* <button type="submit" className="btn btn-primary">
            Add Exam
          </button> */}
          <a class="btn btn-primary" href="/add-exam" role="button">
            Add Exam
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
                <th scope="col">Exam Name</th>
                <th scope="col">Course</th>
                <th scope="col">Type</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Options</th>
              </tr>
            </thead>
            <tbody>
              {this.state.exams.map((exam) => (
                <tr key={exam.id}>
                  <td>{exam.title}</td>
                  <td>{exam.courseName}</td>
                  <td>{exam.type}</td>
                  <td>{exam.examDate}</td>
                  <td>{exam.startTime}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Exam;
