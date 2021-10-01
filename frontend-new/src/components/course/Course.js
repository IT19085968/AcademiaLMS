import React from "react";
import axios from "axios";
import "../buttons/Buttons.css";
import img1 from "../images/bg.jpg";
import Art from "../images/1.jpg";
import IT from "../images/2.jpg";
import gd from "../images/3.jpg";
import ITD from "../images/4.jpg";
import python from "../images/5.jpg";
import sm from "../images/6.jpg";
import spring from "../images/7.jpg";
import html5 from "../images/8.jpg";
import "./Course.css";
import Pdf from 'react-to-pdf';
import AddCourse from './AddCourse';

const ref = React.createRef();

const options = {
  orientation: 'landscape',
  unit: 'in',
  format: [9.5, 8]
};

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.onSearch = this.onSearch.bind(this);

    this.state = {
      courses: [],
      // courseId:"",
      id: "",
      // courseName:"",
      name: "",
      // 
      description: "",
      duration: "",
      isEdit: false,
      isAdd: true,
      searchCourse: "",
      selectedCourses: "",
    };
  }

  onClick(e) {
    e.preventDefault();
    this.setState({
      isAdd: true,
    });
  }

  componentDidMount() {
    axios.get("http://localhost:8080/courses/suggestion").then((responce) => {
      this.setState({ courses: responce.data });
    });
  }

  deleteCourse = (id) => {
    axios.delete("http://localhost:8080/courses/" + id)
      .then(responce => {
        if (responce.data != null) {
          alert("Course deleted successfully");
          this.setState({
            courses: this.state.courses.filter(course => course.id != id)
          });
        }
      });
  }

  editCourse(id, name, description, duration) {
    this.setState({
      isEdit: true,
      id: id,
      name: name,
      description: description,
      duration: duration,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      selectedCourses: this.state.courses,
    });
    this.setState({
      selectedCourses: this.state.selectedCourses.filter(
        (course) => course.name == this.state.selectedCourses
      ),
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSearch(e) {
    e.preventDefault();
    this.setState({
      courses: this.state.courses.filter(
        (course) => course.name == this.state.searchCourse
      ),
    });
  }

  // ViewCourse = (id) =>{
  //   axios.get("http://localhost:8080/courses/" +id)
  //   .then(responce =>{
  //     if(responce.data != null){
  //         // alert("Course deleted successfully");
  //         this.setState({ courses: responce.data });
  //     }
  //   });
  // }

  render() {
    return (
      <div className="course">
        <section class="home">
          <img class="image" src={img1} />
          <div class="centered">
            <div class="hero-text text-white">
              <h1 className="pic-back">Get The Best Free Online Courses</h1>
              <p className="pic-back">Learn from nothing to be something</p>
            </div>

            <div class="row">
              <div class="col">
                <input type="text" class="form-control" placeholder="Course" />
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Category"
                />
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div class="col">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input class="btn btn" type="submit" value="Search" />
              </div>
            </div>
          </div>
        </section>

        <section class="course-section spad pb-0">
          <div class="course-warp">
            <ul class="course-filter controls">
              <li class="control active" data-filter="all">
                All
              </li>
              <li class="control" data-filter=".finance">
                Finance
              </li>
              <li class="control" data-filter=".design">
                Design
              </li>
              <li class="control" data-filter=".web">
                Web Development
              </li>
              <li class="control" data-filter=".photo">
                Photography
              </li>
            </ul>
            <div class="row course-items-area">
              <div class="mix col-lg-3 col-md-4 col-sm-6 finance">
                <div class="course-item">
                  <div class="course-thumb set-bg">
                    <img class="course-thumb set-bg" src={Art} />
                  </div>
                  <div class="course-info">
                    <div class="course-text">
                      <h3>Art & Crafts</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                      <div class="students">120 Students</div>
                    </div>
                    <div class="course-author">
                      <div class="ca-pic set-bg"></div>
                      <p>
                        William Parker, <span>Developer</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mix col-lg-3 col-md-4 col-sm-6 design">
                <div class="course-item">
                  <div class="course-thumb set-bg">
                    <img class="course-thumb set-bg" src={IT} />
                  </div>
                  <div class="course-info">
                    <a href="/select-course" >
                      <div class="course-text">
                        <h3>Learn Spring Boot</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                        <div class="students">120 Students</div>
                      </div>
                      <div class="course-author">
                        <div
                          class="ca-pic set-bg"
                          data-setbg="img/authors/2.jpg"
                        ></div>
                        <p>
                          William Parker, <span>Developer</span>
                        </p>
                      </div>
                    </a>
                  </div>

                </div>

              </div>

              <div class="mix col-lg-3 col-md-4 col-sm-6 web">
                <div class="course-item">
                  <div class="course-thumb set-bg">
                    <img class="course-thumb set-bg" src={gd} />
                  </div>
                  <div class="course-info">
                    <div class="course-text">
                      <h3>Graphic Design</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                      <div class="students">120 Students</div>
                    </div>
                    <div class="course-author">
                      <div
                        class="ca-pic set-bg"
                        data-setbg="img/authors/3.jpg"
                      ></div>
                      <p>
                        William Parker, <span>Developer</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mix col-lg-3 col-md-4 col-sm-6 photo">
                <div class="course-item">
                  <div class="course-thumb set-bg">
                    <img class="course-thumb set-bg" src={ITD} />
                  </div>
                  <div class="course-info">
                    <div class="course-text">
                      <h3>IT Development</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                      <div class="students">120 Students</div>
                    </div>
                    <div class="course-author">
                      <div
                        class="ca-pic set-bg"
                        data-setbg="img/authors/4.jpg"
                      ></div>
                      <p>
                        William Parker, <span>Developer</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mix col-lg-3 col-md-4 col-sm-6 finance">
                <div class="course-item">
                  <div class="course-thumb set-bg">
                    <img class="course-thumb set-bg" src={python} />
                  </div>
                  <div class="course-info">
                    <div class="course-text">
                      <h3>Python Program</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                      <div class="students">120 Students</div>
                    </div>
                    <div class="course-author">
                      <div
                        class="ca-pic set-bg"
                        data-setbg="img/authors/5.jpg"
                      ></div>
                      <p>
                        William Parker, <span>Developer</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mix col-lg-3 col-md-4 col-sm-6 design">
                <div class="course-item">
                  <div class="course-thumb set-bg">
                    <img class="course-thumb set-bg" src={sm} />
                  </div>
                  <div class="course-info">
                    <div class="course-text">
                      <h3>Socia Media</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                      <div class="students">120 Students</div>
                    </div>
                    <div class="course-author">
                      <div
                        class="ca-pic set-bg"
                        data-setbg="img/authors/6.jpg"
                      ></div>
                      <p>
                        William Parker, <span>Developer</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mix col-lg-3 col-md-4 col-sm-6 web">
                <div class="course-item">
                  <div class="course-thumb set-bg">
                    <img class="course-thumb set-bg" src={spring} />
                  </div>
                  <div class="course-info">
                    <div class="course-text">
                      <h3>Learn SprinBoot</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                      <div class="students">120 Students</div>
                    </div>
                    <div class="course-author">
                      <div
                        class="ca-pic set-bg"
                        data-setbg="img/authors/7.jpg"
                      ></div>
                      <p>
                        William Parker, <span>Developer</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mix col-lg-3 col-md-4 col-sm-6 photo">
                <div class="course-item">
                  <div class="course-thumb set-bg">
                    <img class="course-thumb set-bg" src={html5} />
                  </div>
                  <div class="course-info">
                    <div class="course-text">
                      <h3>HTML 5</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                      <div class="students">120 Students</div>
                    </div>
                    <div class="course-author">
                      <div
                        class="ca-pic set-bg"
                        data-setbg="img/authors/8.jpg"
                      ></div>
                      <p>
                        William Parker, <span>Developer</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <br></br>
        <br></br>
        <br></br>



        <div className="container">

          <div class="search-container">
            <form onSubmit={(e) => this.onSearch(e)}>
              <div className="rowClass2">
                <div className="searchInput">
                  <input
                    type="text"
                    placeholder="Search.."
                    className="form-control"
                    id="Type"
                    name="searchCourse"
                    value={this.state.searchCourse}
                    onChange={this.onChange}
                  // aria-describedby="emailHelp"
                  />
                </div>
                <button type="submit">
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </form>
          </div>

          <div ref={ref}>
            <table className="table table-bordered tableClass">
              <thead>
                <tr>
                  <th scope="col">Course Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Duration</th>
                  {/* <th scope="col">Instructors</th> */}
                </tr>
              </thead>

              <tbody>
                {this.state.courses.map((course) => (
                  <tr key={course.id}>
                    <td>{course.name}</td>
                    <td>{course.description}</td>
                    <td>{course.duration}</td>


                    {/* <td> <a class="btn btn" href="/edit-course" role="button" 
                  onClick={(e) =>
                    this.editCourse(
                      course.courseName,
                      course.courseDescription,
                      course.duration
                    )
                  }>
                  Edit Course
                  </a></td> */}

                    <td>
                      <button
                        onClick={(e) =>
                          this.editCourse(
                            course.id,
                            course.name,
                            course.description,
                            course.duration
                          )
                        }
                        className="btn waves-effect waves-blue2"
                      >
                        Edit Exam
                      </button>
                    </td>

                    <td> <a class="btn btn" href="/delete-course" role="button" onClick={this.deleteCourse.bind(this, course.id)}>
                      Delete Course
                    </a> </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* {this.state.courses.length > 0 &&
            this.state.courses.map((item, index) => (
              <div key={index} className="card mb-3">
                <div className="p-3">
                  <h5>Course Name : {item.name}</h5>
                  <h5>Description : {item.description}</h5>
                  <h5>Duration : {item.duration}</h5>
                  <br></br>
                </div>
              </div>
            ))} */}
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
        <a class="btn btn" href="/add-course" role="button">
          Add Course
        </a>
        &nbsp;&nbsp;&nbsp;
        {/* <a class="btn btn" href="/edit-category" role="button">
            Edit Course
          </a> */}

        <Pdf targetRef={ref} filename="CourseList.pdf" options={options} >
          {({ toPdf }) => <input type="button" value="Export" onClick={toPdf} className="btn btn-info" />}
        </Pdf>

        <div className="col s6">
          {this.state.isEdit ? (
            <AddCourse
              id={this.state.id}
              isEdit={this.state.isEdit}
              name={this.state.name}
              description={this.state.description}
              duration={this.state.duration}

            />
          ) : (
            ""
          )}
        </div>
      </div>

    );
  }
}

export default Course;
