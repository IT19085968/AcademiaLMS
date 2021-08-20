import React from 'react';
import Select from 'react-select';
import axios from 'axios';


class AddUsers extends React.Component{
    constructor(props){
        super(props);
       
        }


        render() {
            return (
                 <div className="container">

                        <section  class="home">
                    
                        <br></br><br></br>
                        User Approval  
                            <ul class="nav nav-tabs">
                        
                                <li class="nav-item">
                                    <a class="nav-link " href="/one">Approved Users</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " href="/two">Pending Users</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="/addUsers">Add Users</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">View All Courses</a>
                                </li>
                             </ul>
            
                
                        </section> 
           
                        <div>
                            <div id="registration-form">
                                <div class='fieldset'>
                                    <legend>Add New User Here</legend>
                                    <form  onSubmit={this.onSubmit}>
                                
                                        <div class='row'>
                                            <label for='firstname'>User Name</label>
                                            <input type="text" 
                                                placeholder="Category Name" 
                                                name='gname' 
                                                // value={this.state.gname} 
                                                // onChange={this.onChange} 
                                                id='firstname' 
                                                data-required="true" 
                                                data-error-message="Your First Name is required"/>
                                        </div>

                                        <div class='row'>
                                            <label for="email">User Role</label>
                                            <input type="text" 
                                                placeholder="Description"  
                                                name='gdescription' 
                                                // value={this.state.gdescription} 
                                                // onChange={this.onChange} 
                                                data-required="true" 
                                                data-type="email" 
                                                data-error-message="Your E-mail is required"/>
                                        </div>

                                        <div class='row'>
                                            <label htmlFor="courses" >Useer Role</label>
                                            <Select
                                                // options={this.state.options}
                                                // onChange={this.selectedCourses}
                                                className="basic-multi-select"
                                                //isMulti
                                            />
                                        </div>
                                        
                                        <input type="submit" value="Add Category"/>
                                    </form>
                                </div>
                            </div>
                        </div>

                     
                     </div>
            );
        }
}

export default AddUsers;