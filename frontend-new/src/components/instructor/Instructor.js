import React , {useState} from "react";
import axios from "axios";

//var [searchTerm, setsearchTerm] = useState("");
class InstructorList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      instructors: [],
      Courses: [],
      name: "",
      email: "",
      contactNumber: "",
      id: "",
      //searchTerm: 0,
      //setsearchTerm:0 
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
            <form action="/action_page.php">
              <input type="text" placeholder="Search.." name="search" 
              // onChange={(e) => {setsearchTerm(e.target.value);}}
               />
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
                <th scope="col">Instructor Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Courses</th>
                <th scope="col">Options</th>
              </tr>
            </thead>

            <tbody>
              {this.state.instructors
              // .filter(val=>{
              //   if(searchTerm === ''){
              //     return val;
              //   }else if(
              //      val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
              //   ){
              //     return val;
              //   }
              // })
              .map((instructor) => (
                <tr key={instructor.id}>
                  <td>{instructor.name}</td>
                  <td>{instructor.email}</td>
                  <td>{instructor.contactNumber}</td>
                  <td>{instructor.courses}</td>
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
    );
  }
}

export default InstructorList;
