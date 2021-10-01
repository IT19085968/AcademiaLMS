import React from 'react';
import axios from 'axios';
import Select from 'react-select';
import './AddCourse.css'
import img1 from '../images/bg.jpg';



class AddCourse extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onLecturerSelect = this.onLecturerSelect.bind(this);
    this.state = {
      cname: '',
      cdescription: '',
      cduration: '',
      lecturers: [],
      options: [],
      selectedLecturers: [],
      id: "",
      isEdit: false,
      // courseId:"",
      // lecturerId:"",
      // lecturerName:"",

      // errors:{
      //   cname:"",
      //   cdescription:"",
      //   cduration:"",
      // }
    }
  }



  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'CourseName':
        errors.cname =
          value.length < 5
            ? 'Course Name must be at least 5 characters long!'
            : '';
        break;
      case 'description':
        errors.cdescription =
          value.length < 5
            ? 'Course Description must be at least 5 characters long!'
            : '';
        break;
      // case 'duration': 
      //   errors.cduration = 
      //     value.length < 8
      //       ? 'Password must be at least 8 characters long!'
      //       : '';
      //   break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  }

  componentWillMount() {
    axios.get('http://localhost:8080/lecturer/suggestion')
      .then(response => {
        this.setState({ lecturers: response.data }, () => {
          let data = [];
          this.state.lecturers.map((item, index) => {
            let lecturer = {
              value: item._id,
              label: item.name
            }
            data.push(lecturer)
          });
          this.setState({ options: data });
        })
      })


    const { id } = this.props;
    const { isEdit } = this.props;
    const { cname } = this.props;
    const { cdescription } = this.props;
    const { cduration } = this.props;

    if (id) {
      this.setState({
        id: id,
        isEdit: isEdit,
        cname: cname,
        cdescription: cdescription,
        cduration: cduration
      })
    }
  }


  componentDidUpdate() {
    axios.get('http://localhost:8080/lecturer/suggestion')
      .then(response => {
        this.setState({ lecturers: response.data }, () => {
          let data = [];
          this.state.lecturers.map((item, index) => {
            let lecturer = {
              value: item._id,
              label: item.name
            }
            data.push(lecturer)
          });
          this.setState({ options: data });
        })
      })


    const { id } = this.props;
    const { isEdit } = this.props;
    const { cname } = this.props;
    const { cdescription } = this.props;
    const { cduration } = this.props;

    if (id != this.state.id) {
      this.setState({
        id: id,
        isEdit: isEdit,
        cname: cname,
        cdescription: cdescription,
        cduration: cduration
      })
    }
  }



  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onLecturerSelect(e) {
    this.setState({ selectedLecturers: e ? e.map(item => item.value) : [] });
  }

  formValidation = () => {
    // const {cname, cdescription} = this.state;
    // let isValid = true;
    // const errors ={};
    // if(cname.trim().length < 5){
    //   errors.cnameLength = "Course Name must be of length 5 or higher";
    //   isValid=false;
    // }

    // if(cdescription.trim.length < 5){
    //   errors.cdescriptionLength = "Description must be of length 5 or higher";
    //   isValid=false;
    // }

    // this.setState({errors});
    // return isValid;

    let nameError = "";
    let descriptionError = "";
    let durationError = "";
    // let passwordError = "";

    if (!this.state.cname) {
      nameError = "Please add the name ";
    }

    if (!this.state.cdescription) {
      descriptionError = "Please add the description";
    }

    if (!this.state.cduration) {
      durationError = "Please add the duration";
    }

    if (descriptionError || nameError || durationError) {
      this.setState({ descriptionError, nameError, durationError });
      return false;
    }

    return true;
  }

  onSubmit(e) {
    e.preventDefault();
    const isValid = this.formValidation();
    const { courseId } = this.props;
    const { isEdit } = this.props;
    const { courseName } = this.props;
    const { courseDescription } = this.props;
    const { duration } = this.props;

    if (isValid) {

      if (isEdit == true) {
        let updatedCourse = {
          courseId: courseId,
          name: courseName,
          description: courseDescription,
          duration: duration,
          // lecturers:selectedLecturers
        }
        console.log('data to send', updatedCourse);
        axios.put('http://localhost:8080/courses/', updatedCourse)
          .then(response => {
            alert('Data successfully inserted')
          })
          .catch(error => {
            console.log(error.message);
            alert(error.message)
          })

      }

      else {
        let course = {
          name: this.state.cname,
          description: this.state.cdescription,
          duration: this.state.cduration,
          lecturers: this.state.selectedLecturers
        }
        console.log('data to send', course);
        axios.post('http://localhost:8080/courses/', course)
          .then(response => {
            alert('Data successfully inserted')
          })
          .catch(error => {
            console.log(error.message);
            alert(error.message)
          })
      }


    }

  }


  render() {
    const { errors } = this.state;
    return (

      <div>
        <div id="registration-form">
          <div class='fieldset'>
            <legend>Add Your Course Here</legend>
            <form onSubmit={this.onSubmit}>

              <div class='row'>
                <label for='firstname'>Course Name</label>
                <input type="text" placeholder="Course Name" name='cname' value={this.state.cname} onChange={this.onChange} id='cname' data-required="true" />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.nameError}
                </div>
              </div>

              <div class='row'>
                <label for="email">Description</label>
                <input type="text" placeholder="Description" name='cdescription' value={this.state.cdescription} onChange={this.onChange} data-required="true" />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.descriptionError}
                </div>
              </div>

              <div class='row'>
                <label for="email">Duration</label>
                <input type="text" placeholder="Duration" name='cduration' value={this.state.cduration} onChange={this.onChange} data-required="true" />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.durationError}
                </div>
              </div>

              {/* <div class='row'>
        <label htmlFor="lecturers" >Lecturers</label>
        <Select
        options={this.state.options}
        onChange={this.selectedLecturers}
        className="basic-multi-select"
        isMulti
        />
      </div> */}



              <input type="submit" value="Add Course" />

              {/* {Object.keys(errors).map((key) => {
            return (
              <div style={{ color: "red" }} key={key}>
                {errors[key]}
              </div>
            );
          })} */}

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddCourse;