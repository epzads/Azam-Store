import React, {Component} from 'react'
import { Grid, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import background1 from './background2.jpg'

function Sidebar1(){

let styles = {
    margin: '20px',
    width: '100px',
  //  height: '250px',
    backgroundColor: 'white',
    padding: '5px'
}




  

      
    
    
    
    
    // const background={
    //   background-image: url("./Components/background2.jpg");
    //   background-size: cover;
    //   background-repeat: no-repeat;
    
    
    
    
    
    return(
        
        <Grid>
                <Grid.Row columns={4}>
                <Grid.Column>
        <div class="w3-bar-block w3-black" style={styles}>
    <br></br> <br></br>

  <a href="#" class="w3-bar-item w3-button">Home</a>
  <br></br> <br></br>
  <a href="#" class="w3-bar-item w3-button">Link 1</a>
  <br></br> <br></br>

  <a href="#" class="w3-bar-item w3-button">Link 2</a>
  <br></br> <br></br>

  <a href="#" class="w3-bar-item w3-button">Link 3</a>
  <br></br> <br></br>

</div>


    
</Grid.Column>
    </Grid.Row>
    </Grid>
    
    
    
    
    
    
    )
    
    
    
    
    }
    
    export default Sidebar1