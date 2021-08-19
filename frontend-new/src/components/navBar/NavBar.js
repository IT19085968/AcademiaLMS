import React from 'react';
import './NavBar.css'
import img1 from '../images/bg.jpg';
import img2 from '../images/Logo.png'
import '../images/image.css'
import '../buttons/Buttons.css'

class Navbar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>

<nav class="nav">
    <div class="container">
        <div class="logo">
            <a href="#" src={img2}>YourLogo</a>
           
        </div>
        <div class="main_list" id="mainListDiv">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="/category">Categories</a></li>
                <li><a href="/course">Courses</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#" role="button" class="btn1">Login</a></li>
            </ul>
        </div>
        <div class="media_button">
            <button class="main_media_button" id="mediaButton">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
       
    </div>
</nav>
  


<section class="home">
<img class="image" src={img1} />
</section>


            </div>
        )
    }
}

export default Navbar;