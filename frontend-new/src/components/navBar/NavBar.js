import React from 'react';

class Navbar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">About Us</a>
      <a class="nav-item nav-link" href="/category">Categories</a>
      <a class="nav-item nav-link" href="/course">Courses</a>
      <a class="nav-item nav-link" href="#">News</a>
      <a class="nav-item nav-link" href="#">Contact Us</a>
   
    </div>
  </div>
</nav>
            </div>
        )
    }
}

export default Navbar;