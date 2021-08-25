import React, { Component } from "react";
import axios from "axios";
import Select from "react-select";

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
      selectedOption: "",
      clearable: true,
    };
  }

  componentWillMount() {
    axios.get("http://localhost:8080/courses/").then((res) => {
      this.setState(
        {
          courses: res.data,
        }
        // ,
        // () => {
        //   let data = [];
        //   this.state.courses.map((item, index) => {
        //     let course = {
        //       value: item.id,
        //       label: item.name,
        //     };
        //     data.push(course);
        //   });
        //   this.setState({ options: data });
        // }
      );
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
      <div className="container">
        <br></br>
        <br></br>
        <h3>Add New Exam</h3>

        <form onSubmit={(e) => this.onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="Type" class="form-label">
              Exam Title
            </label>
            <input
              type="text"
              class="form-control"
              id="Type"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
              aria-describedby="emailHelp"
            />
          </div>

          <div class="mb-3">
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

          <div class="mb-3">
            <label for="number" class="form-label">
              Exam Date
            </label>
            <input
              type="text"
              class="form-control"
              id="number"
              name="examDate"
              value={this.state.examDate}
              onChange={this.onChange}
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
