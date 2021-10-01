import React from "react";
import axios from "axios";
import "./Syllabus.css";
import Pdf from 'react-to-pdf';
import "../buttons/Buttons.css";
import { Link, Route, Switch } from "react-router-dom";
import AddSyllabus from "./AddSyllabus";

const ref = React.createRef();
const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [8,8]
};

class Syllabus extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.state = {

        syllabuses:[],
        syllabusId: "",
        courseId: "",
        courseName: "",
        instructorName: "",
        numberOfLessons: 0,
        isEdit: false,
        searchedSyllabus: [],
        searchSyllabus: "",
        selectedSyllabus: [],
    };
  }

  componentWillMount() {
    axios.get("http://localhost:8080/syllabus/").then((res) => {
      this.setState({

        syllabuses: res.data,

      });
    });
  }

  onSearch(e) {
    e.preventDefault();
    this.setState({
      syllabuses: this.state.syllabuses.filter(
        (syllabus) => syllabus.courseName == this.state.searchedSyllabus
      ),
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      selectedSyllabus: this.state.syllabuses,
    });
    this.setState({
      selectedSyllabus: this.state.selectedSyllabus.filter(
        (syllabus) => syllabus.courseName == this.state.selectedSyllabus
      ),
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }




  deleteSyllabus= (id) =>{
    axios.delete("http://localhost:8080/syllabus/" +id)
    .then(responce =>{
      if(responce.data != null){
          alert("Syllabus deleted successfully");
          this.setState({
            syllabuses: this.state.syllabuses.filter
            (Syllabus => Syllabus.id != id)
          });
      }
    });
  }

  editSyllabus(syllabusId, courseId, courseName, instructorName, numberOfLessons){
    this.setState({
      isEdit: true,
      syllabusId: syllabusId,
      courseId: courseId,
      courseName: courseName,
      instructorName: instructorName,
      numberOfLessons: numberOfLessons,
    });
  }


  render() {
    return (
      <div>
        <div className="rowClass">
          <div className="titlesClass md-6">
            <h2>Syllabus details</h2>
          </div>
        </div>
        {/* <div className="addClass">
          <a class="btn btn-primary" href="/add-syllabus" role="button">
            Add Syllabus
          </a>
        </div> */}
        <br />
        <div className="container">
          <div class="search-container">
          <form onSubmit={(e) => this.onSearch(e)}>
            <div className="rowClass2">
              <div className="searchInput">
              <input type="text" 
              placeholder="Search.." 
              className="form-control"
              id="Type"
              name="searchedSyllabus"
              value={this.state.searchedSyllabus}
              onChange={this.onChange}
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
        <div ref={ref}>
          <table className="table table-bordered tableClass">
            <thead>
              <tr>
                <th scope="col">Course Name</th>
                <th scope="col">Intructor Name</th>
                <th scope="col">Number of lessons</th>
                <th scope="col">Options</th>
              </tr>
            </thead>
            <tbody>
              {this.state.syllabuses.map((syllabus) => (
                <tr key={syllabus.id}>
                  <td>{syllabus.courseName}</td>
                  <td>{syllabus.instructorName}</td>
                  <td>{syllabus.numberOfLessons}</td>
                  <td>
                  {/* <button
                      // onClick={(e) => this.viewTheQuiz(exam.quizId)}
                      className="btn waves-effect waves-light"  
                      href="/syllabus"  
                      
                    >
                      Edit details
                    </button> */}
                    <a class="btn btn" href="/lesson" role="button">
                    View Lessons
                    </a>
                    <button
                      onClick={(e) =>
                        this.editSyllabus(
                          syllabus.id,
                          syllabus.courseId,
                          syllabus.courseName,
                          syllabus.instructorName,
                          syllabus.numberOfLessons
                        )
                      }
                      className="btn waves-effect waves-light"
                    >
                      Edit Syllabus
                    </button>

                    <button
                      // onClick={(e) => this.viewTheQuiz(exam.quizId)}
                      className="btn waves-effect waves-light"
                      href="/syllabus"  
                      onClick={this.deleteSyllabus.bind(this, syllabus.id)}
                    >
                      Delete
                    </button>
                  </td>

                  {/* <td>
                  <button
                      // onClick={(e) => this.viewTheQuiz(exam.quizId)}
                      className="btn waves-effect waves-light"
                      href="/delete-syllabus"  
                      onClick={this.deleteSyllabus.bind(this, syllabus.id)}
                    >
                      Delete
                    </button>
                    
                  </td> */}

                  {/* <td> <a class="btn btn" 
                  href="/delete-syllabus" role="button"   onClick={this.deleteSyllabus.bind(this, syllabus.id)}>
                  Delete Course
                  </a> </td> */}

                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
        <div className="col s6">
          {this.state.isEdit ? (
            <AddSyllabus
              syllabusId={this.state.syllabusId}
              isEdit={this.state.isEdit}
              courseId={this.state.courseId}
              courseName={this.state.courseName}
              instructorName={this.state.instructorName}
              numberOfLessons={this.state.numberOfLessons}
            />
          ) : (
            ""
          )}
        </div>
        <div className="addClass">
          {/* <button type="submit" className="btn btn-primary">
            Add Exam
          </button> */}
          <a class="btn btn-primary" href="/add-syllabus" role="button">
            Add New Course
          </a>
          <a class="btn btn-primary" href="/remarks" role="button">
            View Student Remarks
          </a>
          <Pdf targetRef={ref} filename="SyllabusList.pdf" options={options} >
                        {({ toPdf }) =>  <input type="button" value="Export Syllabus Details PDF" onClick={toPdf} className="btn btn-info"/>}
                    </Pdf>
        </div>
        
        
      </div>
    );
  }
}

export default Syllabus;
