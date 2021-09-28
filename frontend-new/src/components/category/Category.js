import React, {useRef} from "react";
import axios from "axios";
import "../buttons/Buttons.css";
import img1 from "../images/bg.jpg";
import "./AddCategory.css";
import {Link} from 'react-router-dom';
import {PDFExport,savePDF} from '@progress/kendo-react-pdf';
import Pdf from 'react-to-pdf';

const ref = React.createRef();
const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [9.5,8]
};

class Category extends React.Component {
  
  constructor(props) {
    super(props);
    // this.handleExportWithComponent = this.handleExportWithComponent.bind(this);
    this.state = {
      categories: [],
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


deleteCategory = (id) =>{
  axios.delete("http://localhost:8080/categories/" +id)
  .then(response =>{
    if(response.data != null){
        alert("Category deleted successfully");
        this.setState({
          categories: this.state.categories.filter(category => category.id !== id)
        });
    }
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
            <Link to={"edit/"+category.id} className="btn btn" role="button">Edit Category</Link>
          </td>

         <td> <a class="btn btn" href="/delete-category" role="button"   onClick={this.deleteCategory.bind(this, category.id)}>
        
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

          {/* <a class="btn btn" href="/add-category" role="button" onClick={handleExportWithComponent}>
            Generate Report
          </a> */}

<Pdf targetRef={ref} filename="CategoryList.pdf" options={options} >
                        {({ toPdf }) =>  <input type="button" value="Export" onClick={toPdf} className="btn btn-info"/>}
                    </Pdf>
        


          &nbsp;&nbsp;&nbsp;
          {/* <a class="btn btn" href="/edit-category" role="button">
            Edit Category
          </a> */}
        </div>
        {/* </PDFExport> */}
      </div>
    );
  }
}

export default Category;
