import React from 'react';
import img1 from '../images/bg.jpg';
import img2 from '../images/Logo.png'
import '../images/image.css'
import '../buttons/Buttons.css'
import './Home.css'

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           

                <section  class="home">
                    <img class="image" src={img1} /> 
                    <div class="centered">
                        <div class="hero-text text-white">
                            <h1>Get The Best Free Online Courses</h1>
                            <p>Learn from nothing to be  something</p>
                        </div>

                        <div class="row">
                            <div class="col">
                            <input type="text" class="form-control" placeholder="First name"/>
                            </div>

                            <div class="col">
                            <input type="text" class="form-control" placeholder="Last name"/>
                            </div>
                            
                            <div class="col">
                            <input class="btn btn" type="submit" value="Submit"/>   
                            </div>
                        </div>
                    </div>
                </section> 
            
        )
    }


}

export default Home;