import React from 'react';
import axios from 'axios';


class AddUsers extends React.Component{
    constructor(props){
        super(props);
       
        }


        render() {
            return (
                 <div>

<section  class="home">
                    
                    <br></br><br></br>
                    User Approval
                    <ul class="nav nav-tabs">
                       
                        <li class="nav-item">
                            <a class="nav-link " href="/Approved Users">Approved Users</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/two">Pending Users</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/addUsers">Add Users</a>
                        </li>
                        
                    </ul>
                
            </section> 
                     Three
                     </div>
            );
        }
}

export default AddUsers;