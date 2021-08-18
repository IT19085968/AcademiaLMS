import React from 'react';
import axios from 'axios';
import './AddCategory.css'

class AddCategory extends React.Component{
    constructor(props){
        super(props);
        this.onChange=this.onChange.bind(this);
        // this.onSubmit=this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value })
    }


    render() {
        return (
             <div>
                 <div id="registration-form">
   <div class='fieldset'>
     <legend>Add New Category Here</legend>
     <form  data-validate="parsley">
       <div class='row'>
         <label for='firstname'>Category Name</label>
         <input type="text" placeholder="Course Name" name='name' id='firstname' data-required="true" data-error-message="Your First Name is required"/>
       </div>
       <div class='row'>
         <label for="email">Description</label>
         <input type="text" placeholder="Description"  name='description' data-required="true" data-type="email" data-error-message="Your E-mail is required"/>
       </div>
       <div class='row'>
         <label for="email">Courses</label>
         <input type="text" placeholder="Duration"  name='email' data-required="true" data-type="email" data-error-message="Your E-mail is required"/>
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
