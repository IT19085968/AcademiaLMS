import React from 'react';
import axios from 'axios';
import Select from 'react-select';
import './AddCourse.css'
import img1 from '../images/bg.jpg';

class EditCourse extends React.Component{
    constructor(props){
        super(props);
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.onLecturerSelect=this.onLecturerSelect.bind(this);
        this.state={
          cname:'',
          cdescription:'',
          cduration:'',
          lecturers:[],
          options:[],
          selectedLecturers:[]
        }
    }


    onChange(e){
        this.setState({[e.target.name]: e.target.value })
    }

    onLecturerSelect(e){
      this.setState({selectedLecturers:e? e.map(item=>item.value):[]});
  }

    onSubmit(e){
      e.preventDefault();
      let course={
          name:this.state.cname,
          description:this.state.cdescription,
          duration:this.state.cduration,
          lecturers:this.state.selectedLecturers
      }
      console.log('data to send',course);
      axios.post('http://localhost:8080/courses/',course)
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
    <legend>Edit Your Course Details Here</legend>
    <form  onSubmit={this.onSubmit}>
     
      <div class='row'>
        <label for='firstname'>Course Name</label>
        <input type="text" placeholder="Course Name" name='cname' value={this.state.cname} onChange={this.onChange} id='cname' data-required="true" data-error-message="Your First Name is required"/>
      </div>
     
      <div class='row'>
        <label for="email">Description</label>
        <input type="text" placeholder="Description"  name='cdescription' value={this.state.cdescription} onChange={this.onChange} data-required="true" data-type="email" data-error-message="Your E-mail is required"/>
      </div>
     
      <div class='row'>
        <label for="email">Duration</label>
        <input type="text" placeholder="Duration"  name='cduration' value={this.state.cduration} onChange={this.onChange} data-required="true" data-type="email" data-error-message="Your E-mail is required"/>
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
      <input type="submit" value="Save Details"/>
      <input type="submit" value="Delete Course"/>
    </form>
  </div>
</div>
            </div>
       );
   }
}

export default EditCourse;