import React from 'react';
import img1 from '../images/bg.jpg';
import '../images/image.css'


class Login extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           

                <section  class="home">
                    <img class="image" src={img1} /> 
                    <div class="centered">
                        

                    <div>
                     <a class="btn btn" href="/one" role="button" >User Management</a>
                   
                     
                 </div>
                    </div>
                </section> 
            
        )
    }


}

export default Login;