import React from "react";
import axios from "axios";
import "./Exam.css";
import ViewQuiz from "../viewQuiz/viewQuiz";
import AddQuiz from "../addQuiz/addQuiz";
import AddExam from "./AddExam";
import { Link, Route, Switch } from "react-router-dom";
import Pdf from "react-to-pdf";
import Select from "react-select";

const ref = React.createRef();
const options = {
  orientation: "landscape",
  unit: "in",
  format: [13, 8],
};

class Exam extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.state = {
      exams: [],
      courses: [],
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
      selectedExams: [],
      selectedCourse: "",
      clearable: true,
      selectedOption: {
        label: "",
        value: "",
      },
      searchedExams: [],
      searchExam: "",
    };
  }

  componentWillMount() {
    axios.get("http://localhost:8080/exams/").then((res) => {
      this.setState({
        exams: res.data,
        selectedExams: res.data,
        id: "",
        name: "",
      });

      console.log("exams:", res.data);
    });

    axios.get("http://localhost:8080/courses/").then((res) => {
      this.setState({
        courses: res.data,
      });
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

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleChange(selectedOption) {
    this.setState({
      selectedOption: selectedOption,
      selectedExams: this.state.exams,
      // courseId: selectedOption.value,
      selectedCourse: selectedOption.label,
    });
  }

  viewTheQuiz(quizId, examId) {
    // if (this.state.quizId) {
    //   this.setState({
    //     // quizId: "61279e68495de239a7eccaca",
    //     quizId: "",
    //   });
    // }
    this.setState({
      // quizId: "61279e68495de239a7eccaca",
      quizId: quizId,
      isEdit: false,
      isEditQuiz: true,
      examId: examId,
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

  deleteExam(examId) {
    axios
      .delete("http://localhost:8080/exams/" + examId)
      .then((res) => {
        this.setState({
          exams: this.state.exams.filter((exam) => exam.id !== examId),
        });
        alert("Data successfully deleted");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      selectedExams: this.state.exams,
    });
    this.setState({
      selectedExams: this.state.selectedExams.filter(
        (exam) => exam.courseName == this.state.selectedCourse
      ),
    });
  }

  onSearch(e) {
    e.preventDefault();
    this.setState({
      exams: this.state.exams.filter(
        (exam) => exam.title == this.state.searchExam
      ),
    });
  }

  render() {
    let coursesList = this.state.courses.map(function (course) {
      return { value: course.id, label: course.name };
    });
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
              className="btn waves-effect waves-green"
              // onClick={this.onClick}
            >
              Add Exam
            </button>
          </Link>
        </div>
        <br />
        <div className="container">
          <div class="search-container">
            <form onSubmit={(e) => this.onSearch(e)}>
              <div className="rowClass2">
                <div className="searchInput">
                  <input
                    type="text"
                    placeholder="Search.."
                    className="form-control"
                    id="Type"
                    name="searchExam"
                    value={this.state.searchExam}
                    onChange={this.onChange}
                    // aria-describedby="emailHelp"
                  />
                </div>

                <button type="submit">
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="examClass">
          <div>
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
                        onClick={(e) => this.viewTheQuiz(exam.quizId, exam.id)}
                        className="btn waves-effect waves-blue1"
                      >
                        Edit Quiz
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
                        className="btn waves-effect waves-blue2"
                      >
                        Edit Exam
                      </button>
                      <button
                        onClick={(e) => this.deleteExam(exam.id)}
                        className="btn waves-effect waves-red"
                        // style={"background-color: #f44336;"}
                      >
                        Delete Exam
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <Pdf targetRef={ref} filename="CourseList.pdf" options={options}>
              {({ toPdf }) => (
                <input
                  type="button"
                  value="Export"
                  onClick={toPdf}
                  className="btn btn-info"
                />
              )}
            </Pdf> */}
          </div>
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
        <div className="pt-3">
          <div className="selectedexamClass pt-6">
            <div className="reportClass">
              <form onSubmit={(e) => this.onSubmit(e)}>
                <h3>Generate Reports</h3>
                {/* <div class="row"> */}
                {/* <label htmlFor="Type">Course Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="Type"
                  name="selectedCourse"
                  value={this.state.selectedCourse}
                  onChange={this.onChange}
                  aria-describedby="emailHelp"
                /> */}
                <br />
                <h5> Search by Course Name</h5>
                <Select
                  name="form-field-name"
                  options={coursesList}
                  onChange={this.handleChange}
                  clearable={this.state.clearable}
                  searchable={this.state.searchable}
                  value={this.state.selectedOption}
                  labelKey="name"
                  valueKey="id"
                />
                {/* </div> */}
                {/* <input
                  type="submit"
                  value="Search"
                  className="btn waves-effect waves-blue3"
                /> */}
                <button
                  type="submit"
                  className="btn waves-effect waves-blue3"
                  // onClick={this.onClick}
                >
                  Search
                </button>
              </form>
            </div>

            <div ref={ref}>
              {this.state.selectedCourse ? (
                <h3>Exams in {this.state.selectedCourse}</h3>
              ) : (
                ""
              )}

              <table className="table table-bordered tableClass">
                <thead>
                  <tr>
                    <th scope="col">Exam Name</th>
                    <th scope="col">Course</th>
                    <th scope="col">Type</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.selectedExams.map((exam) => (
                    <tr key={exam.id}>
                      <td>{exam.title}</td>
                      <td>{exam.courseName}</td>
                      <td>{exam.type}</td>
                      <td>{exam.examDate}</td>
                      <td>{exam.startTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Pdf targetRef={ref} filename="ExamList.pdf" options={options}>
              {({ toPdf }) => (
                <input
                  type="button"
                  value="Export"
                  onClick={toPdf}
                  className="btn btn-info"
                />
              )}
            </Pdf>
          </div>
        </div>
      </div>
    );
  }
}

export default Exam;
