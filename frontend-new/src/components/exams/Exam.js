import React from "react";
import axios from "axios";
import "./Exam.css";
import ViewQuiz from "../viewQuiz/viewQuiz";
import AddQuiz from "../addQuiz/addQuiz";
import AddExam from "./AddExam";
import { Link, Route, Switch } from "react-router-dom";

class Exam extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      exams: [],
      examId: "",
      courseId: "",
      examDate: "",
      startTime: "",
      type: "",
      id: "",
      title: "",
      quizId: "",
      isEdit: false,
      isEditQuiz: false,
      isAdd: false,
    };
  }

  componentWillMount() {
    axios.get("http://localhost:8080/exams/").then((res) => {
      this.setState({
        exams: res.data,
        id: "",
        name: "",
      });

      console.log("exams:", res.data);
    });

    // let quizn = {
    //   exams: this.state.exams,
    // };
  }

  onClick(e) {
    e.preventDefault();
    this.setState({
      isAdd: true,
    });
  }

  viewTheQuiz(quizId) {
    if (this.state.quizId) {
      this.setState({
        // quizId: "61279e68495de239a7eccaca",
        quizId: "",
      });
    }
    this.setState({
      // quizId: "61279e68495de239a7eccaca",
      quizId: quizId,
      isEdit: false,
      isEditQuiz: true,
    });

    let quizn = {
      quizId: this.state.quizId,
    };
  }

  editExam(examId, title, courseName, examDate, courseId, quizId) {
    this.setState({
      // quizId: "61279e68495de239a7eccaca",
      isEdit: true,
      isEditQuiz: false,
      examId: examId,
      title: title,
      courseName: courseName,
      examDate: examDate,
      courseId: courseId,
      quizId: quizId,
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
          {/* <a class="btn btn-primary" href="/add-exam" role="button">
            Add Exam
          </a> */}
          <Link to={{ pathname: "/add-exam" }}>
            <button
              type="button"
              class="btn btn-primary"
              // onClick={this.onClick}
            >
              Add Exam
            </button>
          </Link>
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
                  <td>
                    <button
                      onClick={(e) => this.viewTheQuiz(exam.quizId)}
                      className="btn waves-effect waves-light"
                    >
                      View
                    </button>
                    <button
                      onClick={(e) =>
                        this.editExam(
                          exam.id,
                          exam.title,
                          exam.courseName,
                          exam.examDate,
                          exam.courseId,
                          exam.quizId
                        )
                      }
                      className="btn waves-effect waves-light"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* <div className="col s6">
          {this.state.quizId && this.state.isEdit == false ? (
            <ViewQuiz quizId={this.state.quizId} />
          ) : (
            ""
          )}
        </div> */}
        <div className="col s6">
          {this.state.quizId && this.state.isEdit == false ? (
            <AddQuiz
              examId={this.state.examId}
              title={this.state.title}
              courseId={this.state.courseId}
              courseName={this.state.courseName}
              examDate={this.state.examDate}
              quizId={this.state.quizId}
              isEditQuiz={this.state.isEditQuiz}
            />
          ) : (
            ""
          )}
        </div>
        <div className="col s6">
          {this.state.isEdit ? (
            <AddExam
              examId={this.state.examId}
              isEdit={this.state.isEdit}
              title={this.state.title}
              courseName={this.state.courseName}
              examDate={this.state.examDate}
              courseId={this.state.courseId}
              quizId={this.state.quizId}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Exam;
