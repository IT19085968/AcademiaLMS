import React from 'react';
import axios from 'axios';
import '../buttons/Buttons.css'

class Course extends React.Component{
    constructor(props){
        super(props);
       
        }


        render() {
            return (
                 <div>
                     <a class="btn btn" href="/add-course" role="button" >Add Course</a>
                     &nbsp;&nbsp;&nbsp;
                     <a class="btn btn" href="/edit-category" role="button" >Edit Course</a>
                 </div>
            );
        }
}

export default Course;