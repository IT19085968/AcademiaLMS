import React from 'react';
import axios from 'axios';


class PendingUsers extends React.Component{
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
                            <a class="nav-link " href="/one">ApprovedUsers</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/two">Pending Users</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/addUsers">Add Users</a>
                        </li>
                        
                        
                    </ul>
                    two
                
            </section> 
                     </div>
            );
        }
}

export default PendingUsers;