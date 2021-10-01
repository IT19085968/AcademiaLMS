import React, { Component } from "react";
import axios from "axios";
import Select from "react-select";

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
        //errors:{}

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

    validationChange = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      let errors = this.state.errors;
  
      switch (name) {
        case 'IName': 
          errors.name = 
            value.length < 5
              ? 'Name must be at least 5 characters long!'
              : '';
          break;
        case 'IEmail': 
          errors.email = 
          value.length < 5
          ? 'Email must be at least 5 characters long!'
          : '';
          break;

          case 'IContactnumber': 
          errors.email = 
          value.length < 10
          ? 'Contact Number should be a 10 digit number!'
          : '';
          break;


        
        default:
          break;
      }
  
      this.setState({errors, [name]: value});
    }
    
    formValidation = ()=>{
    
      let nameError = "";
      let emailError = "";
      let contactnumberError = "";
     
  
      if (!this.state.name) {
        nameError = "Please add the name ";
      }
  
      if (!this.state.email) {
        emailError = "Please add the email";
      }

      if (!this.state.contactNumber ) {
        emailError = "Please add the contact number";
      }
  
  
     
  
      if (nameError || emailError||contactnumberError) {
        this.setState({nameError, emailError, contactnumberError });
        return false;
      }
  
      return true;
    }


  

    onSubmit(e){
      e.preventDefault();
      const isvalid = this.formValidation();

      if (isvalid){
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
    

      }

      
  
    render() {
      const {errors} = this.state;
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
                    placeholder="Name"
                    class="form-control"
                    id="Type"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    aria-describedby="emailHelp"
                  />
                    <div style={{ fontSize: 12, color: "red" }}>
                      {this.state.nameError}
                    </div>
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
                  <div style={{ fontSize: 12, color: "red" }}>
                     {this.state.emailError}
                  </div>
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
                  <div style={{ fontSize: 12, color: "red" }}>
                      {this.state.contactNumber}
                    </div>
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
  