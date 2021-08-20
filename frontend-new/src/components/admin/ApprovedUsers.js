import React from 'react';
import axios from 'axios';
import "./ApprovedUsers.css"

class ApprovedUsers extends React.Component{
    constructor(props){
        super(props);
       
        }

        render() {
            return (
              
                <div className="container">
               
                        <br></br><br></br>
                        User Approval                   
                        <ul class="nav nav-tabs">
                        
                            <li class="nav-item">
                                <a class="nav-link active" href="/one">Approved Users</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/two">Pending Users</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/addUsers">Add Users</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/addUsers">View All Courses</a>
                            </li>
                        </ul>
                
                     One 
                   
                </div>
            );
        }
}

export default ApprovedUsers;