import React from "react";
import axios from "axios";
import "../buttons/Buttons.css";

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/courses/suggestion").then((responce) => {
      this.setState({ courses: responce.data });
    });
  }

  render() {
    return (
      <div className="course container">
        {this.state.courses.length > 0 &&
          this.state.courses.map((item, index) => (
            <div key={index} className="card mb-3">
              <div className="p-3">
                <h5>Course Name : {item.name}</h5>
                <h5>Description : {item.description}</h5>
                <h5>Duration : {item.duration}</h5>
                <br></br>
              </div>
            </div>
          ))}
        <a class="btn btn" href="/add-course" role="button">
          Add Course
        </a>
        &nbsp;&nbsp;&nbsp;
        <a class="btn btn" href="/edit-category" role="button">
          Edit Course
        </a>
      </div>
    );
  }
}

export default Course;
