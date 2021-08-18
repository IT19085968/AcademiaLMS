import React from 'react';
import axios from 'axios';
import '../buttons/Buttons.css'

class Category extends React.Component{
    constructor(props){
        super(props);
       
        }


        render() {
            return (
                 <div>
                     <a class="btn btn" href="/add-category" role="button" >Add Category</a>
                     &nbsp;&nbsp;&nbsp;
                     <a class="btn btn" href="/edit-category" role="button" >Edit Category</a>
                 </div>
            );
        }
}

export default Category;