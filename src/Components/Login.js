import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';

export default (props) => (

  <Grid centered columns={2}>
  
    <Grid.Column>
      <Header as="h2" textAlign="center">
      <br>
     </br>   
     <br>
     </br>
     <br>
     </br>   
     <br>
     </br>
     <br> 
     </br>

          
     <font color="red"> WELCOME TO AZAM MART </font>

<br/>

      </Header>
      <Segment>
        <Form size="large">
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Email address"
            
          />
          <Form.Input 
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

          <Button color="blue" fluid size="large" onClick={(e)=>props.loginclick(e)}>
            Login
          </Button>
        </Form>
      </Segment>
      <Message>
        Not registered yet? <a href="#" onClick={props.sign}>Sign Up</a>
      </Message>
    
    </Grid.Column>
   </Grid> 
  
 
)