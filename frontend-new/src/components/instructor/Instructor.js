import React , {useState} from "react";
import axios from "axios";
import "../buttons/Buttons.css";
import Pdf from 'react-to-pdf';

const ref = React.createRef();
const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [13,8]
};


class InstructorList extends React.Component {

  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      instructors: [],
      Courses: [],
      name: "",
      email: "",
      contactNumber: "",
      id: "",
      searchInstructor:"",
      searchedInstructors: [],
    
    
    };
  }

  componentWillMount() {
    axios.get("http://localhost:8080/instructors/").then((res) => {
      this.setState({
        instructors: res.data,
        id: "",
        name: "",
      });
    });
  }

  deleteInstructor= (id) =>{
    axios.delete("http://localhost:8080/instructors/" +id)
    .then(responce =>{
      if(responce.data != null){
          alert("Instructor deleted successfully");
          this.setState({
            instructors: this.state.instructors.filter(instructor => instructor.id != id)
          });
      }
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
 
  onSearch(e) {
    e.preventDefault();
    this.setState({
      instructors: this.state.instructors.filter(
        (instructor) => instructor.name == this.state.searchInstructor
      ),
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      searchedInstructors: this.state.instructors,
    });
    this.setState({
      searchedInstructors: this.state.searchInstructors.filter(
        (instructor) => instructor.name == this.state.searchInstructor
      ),
    });
  }



  render() {
    return (
      <div>
        <div className="rowClass">
          <div className="titlesClass md-6">
            <h3>All Instructors</h3>
          </div>
        </div>

        <div className="addClass ">
          <a class="btn btn-primary" href="/addInstructor" role="button">
            Add Instructor
          </a>
        </div>

        <br />

        <div className="container">
          <div class="search-container">
            <form onSubmit={(e) => this.onSearch(e)}>
              <input type="text" 
                     placeholder="Search.." 
                     name="searchInstructor" 
                     value={this.state.searchInstructor}
                     onChange={this.onChange}
               />
              <button type="submit">
                <i class="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="examClass">
        <div ref={ref}>
          <table className="table table-bordered tableClass">
            <thead>
              <tr>
                <th scope="col">Instructor Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Courses</th>
                <th scope="col">Options</th>
              </tr>
            </thead>

            <tbody>
              {this.state.instructors.map((instructor) => (
                <tr key={instructor.id}>
                  <td>{instructor.name}</td>
                  <td>{instructor.email}</td>
                  <td>{instructor.contactNumber}</td>
                  <td>{instructor.courseName}</td>
                  <td>
                  <button
                      // onClick={(e) => this.viewTheQuiz(exam.quizId)}
                      className="btn waves-effect waves-light"  
                      href="/edit-instructor"  
                      
                    >
                      Edit
                    </button>
                    <button
                      // onClick={(e) => this.viewTheQuiz(exam.quizId)}
                      className="btn waves-effect waves-light"
                      href="/delete-instructor"  
                      onClick={this.deleteInstructor.bind(this, instructor.id)}
                    >
                      Delete
                    </button>
                  </td>
                  
                </tr>
              ))}
            </tbody>

          </table>
          </div>
        </div>

        <br></br>
          <br></br>
          <br></br>
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        <Pdf targetRef={ref} filename="List Of Instructors.pdf" options={options} >
                        {({ toPdf }) =>  <input type="button" value="Export" onClick={toPdf} className="btn btn-info"/>}
                    </Pdf>
        
      </div>
    );
  }
}

export default InstructorList;
