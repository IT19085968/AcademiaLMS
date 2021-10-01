import React, { useRef } from "react";
import axios from "axios";
import "../buttons/Buttons.css";
import img1 from "../images/bg.jpg";
import "./AddCategory.css";
import { Link } from 'react-router-dom';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import Pdf from 'react-to-pdf';
import Addcategory from './AddCategory';

const ref = React.createRef();
const options = {
  orientation: 'landscape',
  unit: 'in',
  format: [9.5, 8]
};

class Category extends React.Component {

  constructor(props) {
    super(props);
    // this.handleExportWithComponent = this.handleExportWithComponent.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      categories: [],
      categoryId: "",
      categoryName: "",
      categoryDescription: "",
      courseId: "",
      isEdit: false,
      isAdd: false
    };
    // this.deleteCategory = this.deleteCategory.bind(this);

    //   const  handleExportWithComponent  = (event) => {
    //     pdfExportComponent.current.save();
    // }

  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/categories/suggestion")
      .then((response) => {
        this.setState({ categories: response.data });
      });
  }

  //   handleExportWithComponent  = (event) => {
  //     pdfExportComponent.current.save();
  // }

  onClick(e) {
    e.preventDefault();
    this.setState({
      isAdd: true,
    });
  }

  deleteCategory = (id) => {
    axios.delete("http://localhost:8080/categories/" + id)
      .then(response => {
        if (response.data != null) {
          alert("Category deleted successfully");
          this.setState({
            categories: this.state.categories.filter(category => category.id !== id)
          });
        }
      });
  }

  editCategory(categoryId, categoryName, categoryDescription, courseId) {
    this.setState({
      // quizId: "61279e68495de239a7eccaca",
      isEdit: true,
      categoryId: categoryId,
      categoryName: categoryName,
      categoryDescription: categoryDescription,
      courseId: courseId,
    });
  }


  render() {
    return (
      <div className="category">
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

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        {/* <PDFExport  ref={pdfExportComponent}  paperSize="A4">  */}
        <div className="container">


          <div ref={ref}>
            <table className="table table-bordered tableClass">
              <tbody>
                {this.state.categories.map((category) => (
                  //  <div className="p-3" onClick={e=>this.navigateCoursePage(e, item._id)}>
                  <tr key={category.id}>
                    <td><h3>{category.name}</h3></td>

                    {/* <td> <a class="btn btn" href="/edit-category" role="button">
            Edit Category
          </a></td> */}

                    <td>
                      <Link to={"edit/" + category.id}
                        onClick={(e) =>
                          this.editCategory(
                            category.id,
                            category.name,
                            category.description,
                            category.courses
                          )
                        }
                        className="btn btn" role="button">Edit Category</Link>
                    </td>

                    <td> <a class="btn btn" href="/delete-category" role="button" onClick={this.deleteCategory.bind(this, category.id)}>

                      Delete Category
                    </a> </td>

                  </tr>
                  // </div>
                ))}
              </tbody>

            </table>
          </div>
        </div>


        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a class="btn btn" href="/add-category" role="button">
            Add Category
          </a>



          <Pdf targetRef={ref} filename="CategoryList.pdf" options={options} >
            {({ toPdf }) => <input type="button" value="Export" onClick={toPdf} className="btn btn-info" />}
          </Pdf>
          &nbsp;&nbsp;&nbsp;

        </div>

        <div className="col s6">
          {this.state.isEdit ? (
            <Addcategory
              categoryId={this.state.categoryId}
              isEdit={this.state.isEdit}
              categoryDescription={this.state.categoryDescription}
              courseId={this.state.courseId}
            />
          ) : (
            ""
          )}
        </div>

      </div>
    );
  }
}

export default Category;
