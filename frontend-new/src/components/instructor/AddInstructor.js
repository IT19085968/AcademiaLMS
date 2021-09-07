import React, { Component } from "react";
import axios from "axios";
import Select from "react-select";
//import "./AddInstructor.css";

export default class AddInstructor extends Component {
    constructor(props) {
      super(props);
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        name: "",
        email: "",
        contactNumber: "",
        selectedOption: "",
        options:[],
        courses:[],
        selectedCourses:[],
        instructorId: "",

      };
    }
  
    componentWillMount() {
      axios.get("http://localhost:8080/instructors/").then((res) => {
        this.setState({
          instructors: res.data,
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
      let instructor = {
        name: this.state.name,
        email: this.state.email,
        contactNumber: this.state.contactNumber,
        
      };
  
      axios
        .post("http://localhost:8080/instructors/", instructor)
        .then((response) => {
          this.setState({ instructorId: response.data.id });
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
              <legend>Add New Instructor Here</legend>
  
              <form onSubmit={(e) => this.onSubmit(e)}>

                <div class="row">
                  <label htmlFor="Type">Instructor Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Type"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    aria-describedby="emailHelp"
                  />
                </div>

                <div class="row">
                  <label htmlFor="Type">Instructor Email</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Type"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    aria-describedby="emailHelp"
                  />
                </div>

                <div class="row">
                  <label htmlFor="Type">Contact Number</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Type"
                    name="contactNumber"
                    value={this.state.contactNumber}
                    onChange={this.onChange}
                    aria-describedby="emailHelp"
                  />
                </div>
  
                <div class="row">
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
  