import React,{Component} from 'react'

export default class Hoverboard extends Component {

handleclick=(text)=>{
console.log(text)


}






render(){
return(
<div>
<div class="dropdown">
  <button class="dropbtn">Phones</button>&nbsp;&nbsp;&nbsp;&nbsp;
  <div class="dropdown-content">
    <a href="#" onClick={()=>this.props.clicker("Nokia")}>Nokia </a>
    <a href="#"onClick={()=>this.props.clicker("Samsung")}>Samsung</a>
    <a href="#"onClick={()=>this.props.clicker("Iphone")}>Iphone</a>
  </div>
</div>
<div class="dropdown">
  <button class="dropbtn">Grocery</button>&nbsp;&nbsp;&nbsp;&nbsp;
  <div class="dropdown-content">
    <a href="#" onClick={()=>this.props.clicker("Sugar")}>Sugar</a>
    <a href="#" onClick={()=>this.props.clicker("Salt")}>Salt</a>
    <a href="#" onClick={()=>this.props.clicker("Coffee")}>Coffee</a>
  </div>
</div>


<div class="dropdown">
  <button class="dropbtn">Electronics</button>&nbsp;&nbsp;&nbsp;&nbsp;
  <div class="dropdown-content">
     <a href="#" onClick={()=>this.props.clicker("Tv")}>Tv</a>
    <a href="#" onClick={()=>this.props.clicker("playstation")}>Playstation</a>
    <a href="#" onClick={()=>this.props.clicker("xboxone")}>Xboxone</a>
  </div>
</div>

<div class="dropdown">
  <button class="dropbtn">Cables</button>&nbsp;&nbsp;&nbsp;&nbsp;
  <div class="dropdown-content">
  <a href="#" onClick={()=>this.props.clicker("Hdmi")}>Hdmi</a>
    <a href="#" onClick={()=>this.props.clicker("apple lightning")}>lightning</a>
    <a href="#" onClick={()=>this.props.clicker("usb c")}>usb c</a>
  </div>
</div>
<div class="dropdown">
  <button class="dropbtn">CLEANING SUPPLIES</button>&nbsp;&nbsp;&nbsp;&nbsp;
  <div class="dropdown-content">
  <a href="#" onClick={()=>this.props.clicker("Bleach")}>Bleach</a>
    <a href="#" onClick={()=>this.props.clicker("tide")}>Tide</a>
    <a href="#" onClick={()=>this.props.clicker("Dishwash")}>Dishwasher</a>
  </div>
</div>



<div class="dropdown">
  <button class="dropbtn">TOOLS & HARDWARE</button>&nbsp;&nbsp;&nbsp;&nbsp;
  <div class="dropdown-content">
  <a href="#" onClick={()=>this.props.clicker("nails")}>Nails</a>
    <a href="#" onClick={()=>this.props.clicker("hammer")}>Hammer</a>
    <a href="#" onClick={()=>this.props.clicker("chainsaw")}>chainsaw</a>
  
  </div>
</div>

<div class="dropdown">
  <button class="dropbtn">AUTO ZONE</button>&nbsp;&nbsp;&nbsp;&nbsp;
  <div class="dropdown-content">
  <a href="#" onClick={()=>this.props.clicker("5W30")}>ENGINE OIL</a>
    <a href="#" onClick={()=>this.props.clicker("wipers")}>Wipers</a>
    <a href="#" onClick={()=>this.props.clicker("carpolish")}>Auto polish</a>
  
  </div>
</div>

{/* <div class="dropdown">
  <button class="dropbtn">FURNITURE</button>&nbsp;&nbsp;&nbsp;&nbsp;
  <div class="dropdown-content">
    <a href="#">Link 8</a>
    <a href="#">Link 9</a>
    <a href="#">Link 10</a>
  </div>
</div> */}

<div class="dropdown">
  <button class="dropbtn">BABY</button>&nbsp;&nbsp;&nbsp;&nbsp;
  <div class="dropdown-content">
  <a href="#" onClick={()=>this.props.clicker("Diaper")}>diaper</a>
    <a href="#" onClick={()=>this.props.clicker("Babyfood")}>Babyfood</a>
    <a href="#" onClick={()=>this.props.clicker("toddler toys")}>Toys</a>
  
  </div>
</div>

<div class="dropdown">
  <button class="dropbtn">HEALTH</button>&nbsp;&nbsp;&nbsp;&nbsp;
  <div class="dropdown-content">
  <a href="#" onClick={()=>this.props.clicker("vitamins")}>Vitamins</a>
    <a href="#" onClick={()=>this.props.clicker("soap")}>Soap</a>
    <a href="#" onClick={()=>this.props.clicker("supplements")}>Supplements</a>
  
  </div>
</div>

<div class="dropdown">
  <button class="dropbtn">SPORTS</button>&nbsp;&nbsp;&nbsp;&nbsp;
  <div class="dropdown-content">
  <a href="#" onClick={()=>this.props.clicker("Baseball")}>Baseball</a>
    <a href="#" onClick={()=>this.props.clicker("Soccer")}>Soccer</a>
    <a href="#" onClick={()=>this.props.clicker("swimming")}>Swimming</a>
  
  </div>
</div>

<div class="dropdown">
  <button class="dropbtn">PETS</button>&nbsp;&nbsp;&nbsp;&nbsp;
  <div class="dropdown-content">
  <a href="#" onClick={()=>this.props.clicker("dogfood")}>Dogfood</a>
    <a href="#" onClick={()=>this.props.clicker("Catfood")}>Catfood</a>
    <a href="#" onClick={()=>this.props.clicker("pettoys")}>Pettoys</a>
  
  </div>
</div>



</div>

)










}






}


