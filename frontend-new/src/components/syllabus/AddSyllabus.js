import React, { Component } from "react";
import axios from "axios";
import Select from "react-select";
import "./AddSyllabus.css";

export default class AddSyllabus extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      courses: [],
      courseId: "",
      courseName: "",
      instructorName: "",
      numberOfLessons: 0
      
    };
  }

  componentWillMount() {
    axios.get("http://localhost:8080/courses/").then((res) => {
      this.setState({
        courses: res.data,
      });
    });
  }

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

  onSubmit(e) {
    e.preventDefault();
    let Syllabus = {
      
      courseId: this.state.courseId,
      courseName: this.state.courseName,
      instructorName: this.state.instructorName,
      numberOfLessons: this.state.numberOfLessons,
      
    };

    axios
      .post("http://localhost:8080/syllabus/", Syllabus)
      .then((response) => {
        this.setState({ examId: response.data.id });
        alert("Data successfully inserted");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  }

  render() {
    let options = this.state.courses.map(function (course) {
      return { value: course.id, label: course.name };
    });
    return (
      <div>
        <div id="registration-form">
          <div class="fieldset">
            <br></br>
            <br></br>
            <legend>Add New Syllabus Here</legend>

            <form onSubmit={(e) => this.onSubmit(e)}>
            <div class="row">
                <label htmlFor="Type">Instructor Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="Type"
                  name="instructorName"
                  value={this.state.instructorName}
                  onChange={this.onChange}
                  aria-describedby="emailHelp"
                />
              </div>

              <div class="row">
                <label htmlFor="Type">Number of lessons</label>
                <input
                  type="number"
                  class="form-control"
                  id="Type"
                  name="numberOfLessons"
                  value={this.state.numberOfLessons}
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

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
