import React from "react";
import axios from "axios";
import "../buttons/Buttons.css";
import img1 from "../images/bg.jpg";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/categories/suggestion")
      .then((responce) => {
        this.setState({ categories: responce.data });
      });
  }

  render() {
    return (
      <div className="category">
        <section class="home">
          <img class="image" src={img1} />
          <div class="centered">
            <div class="hero-text text-white">
              <h1>Get The Best Free Online Courses</h1>
              <p>Learn from nothing to be something</p>
            </div>

            <div class="row">
              <div class="col">
                <input type="text" class="form-control" placeholder="Course" />
              </div>

              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Category"
                />
              </div>

              <div class="col">
                <input class="btn btn" type="submit" value="Search" />
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          {this.state.categories.length > 0 &&
            this.state.categories.map((item, index) => (
              <div key={index} className="card mb-3">
                <div className="p-3">
                  <h5>Category Name : {item.name}</h5>
                  <h5>Description : {item.description}</h5>
                  {/* <h5>Duration : {item.duration}</h5> */}
                  <br></br>
                </div>
              </div>
            ))}
        </div>

        <div>
          <a class="btn btn" href="/add-category" role="button">
            Add Category
          </a>
          &nbsp;&nbsp;&nbsp;
          <a class="btn btn" href="/edit-category" role="button">
            Edit Category
          </a>
        </div>
      </div>
    );
  }
}

export default Category;
