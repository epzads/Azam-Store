import React, {Component} from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import { Divider, Label } from 'semantic-ui-react'

export default class SignUp extends Component {
    constructor(){

    super()    
    
    
      
       
    }
        


    render()
    
    
    
    {
        return (
            <Form>
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
            <br>
            </br>
            <Label font size='massive' color='red' pointing='down'>WELCOME TO AZAM MART Sign up Page</Label>
            <br>
            </br>
            <br>
            </br>
            <Form.Field inline>
              <input type='text' placeholder='Email' ref="email"/>
              <Label pointing='left'>Email!</Label>
            </Form.Field>
            <Divider />
        
            <Form.Field inline>
              <Label pointing='right'>Your password must be 6 characters or more</Label>
              <input type='password' placeholder='Password' ref="password"/>
            </Form.Field>
            <Divider />
            <Form.Field inline>
              <input type='text' placeholder='First Name' id="first" ref="firstname"/>
              <Label pointing='left'>First Name!</Label>
            </Form.Field>
            <Divider />
            <Form.Field inline>
            <Label pointing='right'>Last Name!</Label>

              <input type='text' placeholder='Last Name' ref="last"/>
            </Form.Field>
            <Divider />
            <Form.Field inline>

              <input type='text' size='50' placeholder='Address' ref="Address"/>
              <Label pointing='left'>Address</Label>

            </Form.Field>
        
            <Divider />
            <Form.Field inline>

              <input type='integer' size='10' placeholder='Phonenumber' ref="phonenumber"/>
              <Label pointing='left'>Address</Label>

            </Form.Field>

            <Form.Button onClick={(e)=>this.props.signupclick(e,this.refs.email,this.refs.password,this.refs.firstname,this.refs.last,this.refs.Address,this.refs.phonenumber)}>Submit</Form.Button>
            <Label font size='massive' color='red' pointing='down'>AZAM MART - QUALITY WITH REASONABLE PRICE</Label>

          </Form>         

            

        
        )
    }
}

