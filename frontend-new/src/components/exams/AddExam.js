import React, { Component } from "react";
import axios from "axios";
import Select from "react-select";
import AddQuiz from "../addQuiz/addQuiz";
import "./AddExam.css";
// const { BrowserRouter, Switch, Route, Link, NavLink } = ReactRouterDOM;
import { Link, Route, Switch, BrowserRouter, NavLink } from "react-router-dom";
// import { useLocation } from "react-router";

export default class AddExam extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      title: "",
      courseId: "",
      courseName: "",
      categoryId: "",
      examDate: "",
      startTime: "",
      endTime: "",
      instructions: "",
      type: "",
      courses: [],
      options: [],
      selectedCourses: [],
      id: "",
      duration: "",
      description: "",
      value: "",
      selectedOption: {
        label: "",
        value: "",
      },
      clearable: true,
      examId: "",
      isEdit: false,
      quizId: "",
      isEditQuiz: false,
      errors: {},
    };
  }

  componentWillMount() {
    // const location = useLocation();
    axios.get("http://localhost:8080/courses/").then((res) => {
      this.setState({
        courses: res.data,
      });
    });
    const { examId } = this.props;
    const { isEdit } = this.props;
    const { title } = this.props;
    const { courseName } = this.props;
    const { examDate } = this.props;
    const { startTime } = this.props;
    const { courseId } = this.props;
    const { quizId } = this.props;
    if (isEdit && examId) {
      this.setState({
        examId: examId,
        examDate: examDate,
        title: title,
        courseName: courseName,
        isEdit: isEdit,
        quizId: quizId,
        startTime: startTime,
        // selectedOption: courseName,
        courseId: courseId,
        selectedOption: {
          label: courseName,
          value: courseId,
        },
      });
    }
    // axios.get("http://localhost:8080/exams/" + examId).then((res) => {
    //   this.setState({
    //     examDate: res.data.examDate,
    //     title: res.data.title,
    //     courseId: res.data.courseId,
    //     courseName: res.data.courseName,

    //     selectedOption: res.data.courseName,
    //   });
    // });
  }

  componentDidUpdate() {
    // const location = useLocation();
    axios.get("http://localhost:8080/courses/").then((res) => {
      this.setState({
        courses: res.data,
      });
    });
    const { examId } = this.props;
    const { isEdit } = this.props;
    const { title } = this.props;
    const { courseName } = this.props;
    const { examDate } = this.props;
    const { courseId } = this.props;
    const { quizId } = this.props;
    const { startTime } = this.props;
    if (isEdit && examId && this.state.examId != examId) {
      this.setState({
        examId: examId,
        examDate: examDate,
        title: title,
        courseName: courseName,
        isEdit: isEdit,
        quizId: quizId,
        startTime: startTime,
        // selectedOption: courseName,
        courseId: courseId,
        selectedOption: {
          label: courseName,
          value: courseId,
        },
      });
    }
    // axios.get("http://localhost:8080/exams/" + examId).then((res) => {
    //   this.setState({
    //     examDate: res.data.examDate,
    //     title: res.data.title,
    //     courseId: res.data.courseId,
    //     courseName: res.data.courseName,

    //     selectedOption: res.data.courseName,
    //   });
    // });
  }

  // componentDidMount() {
  //   let quizn = {
  //     title: this.state.title,
  //     courseId: this.state.courseId,
  //     courseName: this.state.courseName,
  //     examDate: this.state.examDate,
  //     selectedOption: this.state.courseName,
  //   };
  // }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleChange(selectedOption) {
    this.setState({
      selectedOption: selectedOption,
      courseId: selectedOption.value,
      courseName: selectedOption.label,
    });
  }

  formValidation = () => {
    const { title, examDate, courseName, startTime } = this.state;
    let isValid = true;
    const errors = {};
    if (title.trim().length < 6) {
      errors.titleLength = "Title must be more than 6 caharacters!";
      isValid = false;
    }

    if (examDate.trim().length < 3) {
      errors.dateLength = "Invalid date!";
      isValid = false;
    }

    if (courseName.trim().length < 3) {
      errors.courseLength = "Please select a course!";
      isValid = false;
    }

    if (startTime.trim().length < 2) {
      errors.timeLength = "Please enter a valid time!";
      isValid = false;
    }
    this.setState({ errors });
    return isValid;
  };

  onSubmit(e) {
    e.preventDefault();
    const isValid = this.formValidation();

    if (isValid) {
      if (this.state.isEdit && this.state.isEdit == true) {
        let examNew = {
          id: this.state.examId,
          title: this.state.title,
          courseId: this.state.courseId,
          quizId: this.state.quizId,
          courseName: this.state.courseName,
          examDate: this.state.examDate,

          categoryId: null,
          startTime: this.state.startTime,
          endTime: null,
          instructions: null,
          type: null,
        };

        axios
          .put("http://localhost:8080/exams/", examNew)
          .then((response) => {
            // this.setState({ examId: response.data.id });
            alert("Data successfully inserted");
          })
          .catch((error) => {
            console.log(error.message);
            alert(error.message);
          });
      } else {
        let Exam = {
          title: this.state.title,
          courseId: this.state.courseId,
          courseName: this.state.courseName,
          categoryId: this.state.categoryId,
          examDate: this.state.examDate,
          startTime: this.state.startTime,
          endTime: this.state.endTime,
          instructions: this.state.instructions,
          type: this.state.type,
        };

        axios
          .post("http://localhost:8080/exams/", Exam)
          .then((response) => {
            this.setState({ examId: response.data.id });
            alert("Data successfully inserted");
          })
          .catch((error) => {
            console.log(error.message);
            alert(error.message);
          });
      }
    }
  }

  render() {
    const { errors } = this.state;
    let options = this.state.courses.map(function (course) {
      return { value: course.id, label: course.name };
    });
    return (
      <div>
        <div id="registration-form">
          <div class="fieldset">
            <br></br>
            <br></br>
            {this.state.isEdit == true ? (
              <legend>Edit Exam</legend>
            ) : (
              <legend>Add New Exam Here</legend>
            )}

            <form onSubmit={(e) => this.onSubmit(e)}>
              <div class="row">
                <label htmlFor="Type">Exam Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="Type"
                  name="title"
                  placeholder="Enter title"
                  value={this.state.title}
                  onChange={this.onChange}
                  aria-describedby="emailHelp"
                />
              </div>

              <div class="row">
                {/* <label>
              Select Course:
              <select value={this.state.value} onChange={this.selectedCourses}>
                {this.state.courses.map((course) => (
                  <option value={course.name}>{course.name}</option>
                ))}
              </select>
            </label> */}
                {/* <label>
              Select Course:
              <select value={this.state.id} onChange={this.handleChange}>
                {this.state.courses.map((course) => (
                  <option value={course.id}>{course.name}</option>
                ))}
              </select>
            </label> */}
                <label htmlFor="courses">Courses</label>
                <Select
                  name="form-field-name"
                  options={options}
                  onChange={this.handleChange}
                  clearable={this.state.clearable}
                  searchable={this.state.searchable}
                  value={this.state.selectedOption}
                  labelKey="name"
                  valueKey="id"
                />
              </div>

              <div class="row">
                <label htmlFor="Type">Exam Date</label>
                <input
                  type="date"
                  class="form-control"
                  id="Type"
                  name="examDate"
                  value={this.state.examDate}
                  onChange={this.onChange}
                />
              </div>
              <div class="row">
                <label htmlFor="Type">Start Time</label>
                <input
                  type="time"
                  class="form-control"
                  id="Type"
                  name="startTime"
                  value={this.state.startTime}
                  onChange={this.onChange}
                />
              </div>

              <input type="submit" value="Submit" />
              {Object.keys(errors).map((key) => {
                return (
                  <div style={{ color: "red" }} key={key}>
                    {errors[key]}
                  </div>
                );
              })}
            </form>
          </div>
        </div>
        <div className="col s6">
          {this.state.examId && this.state.isEdit == false ? (
            <AddQuiz
              examId={this.state.examId}
              title={this.state.title}
              courseId={this.state.courseId}
              courseName={this.state.courseName}
              examDate={this.state.examDate}
              startTime={this.state.startTime}
              quizId={this.state.quizId}
              isEditQuiz={this.state.isEditQuiz}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
