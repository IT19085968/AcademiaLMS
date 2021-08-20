import React from 'react';
//import './NavBar.css'
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

    {/* <nav class="nav">
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
</nav> */}
  

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
    <a class="navbar-brand" href="/home">&nbsp;&nbsp;&nbsp;Academia</a>
   
    <div class="collapse navbar-collapse" id="navbarText">
        <ul class="nav">
            <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/category">Categories</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/course">Courses</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#" >Contact Us</a>
            </li> 
        </ul>

     <div>
        <ul className="nav justify-content-end">
                <li class="nav-item">
                <a class="nav-link" href="/login">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    LOGIN</a>
                </li>
                
        </ul>
     </div>
    </div>
</nav>

                {/* <section class="home">
                <img class="image" src={img1} />
                </section> */}

<section  class="home">
                    {/* <img class="image" src={img1} />  */}
                    <div class="centered">
                        {/* <div class="hero-text text-white">
                            <h1>Get The Best Free Online Courses</h1>
                            <p>Learn from nothing to be  something</p>
                        </div> */}

                        {/* <div class="row">
                            <div class="col">
                            <input type="text" class="form-control" placeholder="Course"/>
                            </div>

                            <div class="col">
                            <input type="text" class="form-control" placeholder="Category"/>
                            </div>
                            
                            <div class="col">
                            <input class="btn btn" type="submit" value="Search"/>   
                            </div>
                        </div> */}
                    </div>
                </section> 


            </div>
        )
    }
}

export default Navbar;