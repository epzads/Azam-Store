import React, {Component} from 'react'

import background1 from './background2.jpg'
import PropTypes from 'prop-types'
import Cardmain from './Card'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Search
  
} from 'semantic-ui-react'

class Mainmenu extends Component{

handleclick=(e)=>{

console.log(e.target.value)

}


render(){

// const background={
//   background-image: url("./Components/background2.jpg");
//   background-size: cover;
//   background-repeat: no-repeat;





return(

		


  <div style={{ backgroundImage: `url(${background1})`, backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat', opacity: 12.0 }}>
    
{/* //    <div class="item"><button class="ui primary button" style={{opacity:9.0}}>Profile</button></div>
//     <div class="item"><button class="ui button">Log Out</button></div>
//     <Search onSearchChange={this.handleclick}/>

// </div> */}
  
    
<div class="ui secondary menu">
  <a class="active item">Home</a><a class="item">Messages</a
  ><a class="item">Friends</a>
  <div class="right menu">
    <div class="item">
      <div class="ui icon input">
        <input type="text" placeholder="Search..." /><i
          aria-hidden="true"
          class="search icon"
        ></i>
      </div>
    </div>
    <a class="item">Logout</a>
  </div>
</div>
</div>




)




}







}





export default Mainmenu 
