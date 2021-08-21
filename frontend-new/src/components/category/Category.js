import React from 'react';
import axios from 'axios';
import '../buttons/Buttons.css'
import img1 from '../images/bg.jpg';

class Category extends React.Component{
    constructor(props){
        super(props);
       
        }


        render() {
            return (
                <div>

<section  class="home">
                    <img class="image" src={img1} /> 
                    <div class="centered">
                        <div class="hero-text text-white">
                            <h1>Get The Best Free Online Courses</h1>
                            <p>Learn from nothing to be  something</p>
                        </div>

                        <div class="row">
                            <div class="col">
                            <input type="text" class="form-control" placeholder="Course"/>
                            </div>

                            <div class="col">
                            <input type="text" class="form-control" placeholder="Category"/>
                            </div>
                            
                            <div class="col">
                            <input class="btn btn" type="submit" value="Search"/>   
                            </div>
                        </div>
                    </div>
                </section> 
                 <div>
                     <a class="btn btn" href="/add-category" role="button" >Add Category</a>
                     &nbsp;&nbsp;&nbsp;
                     <a class="btn btn" href="/edit-category" role="button" >Edit Category</a>
                 </div>

                 </div>
            );
        }
}

export default Category;