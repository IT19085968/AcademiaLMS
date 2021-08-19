import React from 'react';
import axios from 'axios';
import './AddCategory.css'

class AddCategory extends React.Component{
    constructor(props){
        super(props);
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
          gname:'',
          gdescription:'',
          courses:[],
          options:[],
          selectedCourses:[]
        }
    }

       componentDidMount(){
      axios.get('http://localhost:8080/lecturer/suggestion')
      .then(response=>{
          this.setState({lecturers: response.data.data},()=>{
              let data=[];
              this.state.lecturers.map((item,index)=>{
                  let lecturer={
                      value:item._id,
                      label:item.name
                  }
                  data.push(lecturer)
              });
              this.setState({options:data});
          })
      })
  }

    onChange(e){
        this.setState({[e.target.name]: e.target.value })
    }


    onSubmit(e){
      e.preventDefault();
      let category={
          name:this.state.gname,
          description:this.state.gdescription,
          courses:this.state.selectedCourses
      }
      console.log('data to send',category);
      axios.post('http://localhost:8080/categories/',category)
      .then(response=>{
          alert('Data successfully inserted')
      })
      .catch(error=>{
          console.log(error.message);
          alert(error.message)
      })
  }

    render() {
        return (
             <div>
                 <div id="registration-form">
   <div class='fieldset'>
     <legend>Add New Category Here</legend>
     <form  onSubmit={this.onSubmit}>
      
       <div class='row'>
         <label for='firstname'>Category Name</label>
         <input type="text" placeholder="Category Name" name='gname' value={this.state.gname} onChange={this.onChange} id='firstname' data-required="true" data-error-message="Your First Name is required"/>
      </div>

       <div class='row'>
         <label for="email">Description</label>
         <input type="text" placeholder="Description"  name='gdescription' value={this.state.gdescription} onChange={this.onChange} data-required="true" data-type="email" data-error-message="Your E-mail is required"/>
       </div>

      <div class='row'>
        <label htmlFor="courses" >Courses</label>
        <Select
        options={this.state.options}
        onChange={this.selectedCourses}
        className="basic-multi-select"
        isMulti
        />
      </div>
      
       <input type="submit" value="Add Course"/>
     </form>
   </div>
 </div>
             </div>
        );
    }
}

export default AddCategory;
