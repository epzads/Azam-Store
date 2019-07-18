import React, {Component} from 'react'
import { connect } from 'react-redux'

import { Button, Card, Icon, Image, Grid, Modal, Header } from 'semantic-ui-react'
import background1 from './background2.jpg'
import Modall from './Modall'
// import { Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle } from 'reactstrap'

export default class Cardmain  extends Component{
constructor(){
super()
this.state={
id: 0,
toggle:true, 
addtocard:false,
item:[],
cart:[],
xhr:[]
}
}


state = { open : false, open2: false,}
closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
    }
  
    close = () => this.setState({ open: true })
 
    click = () => {
      console.log("clicked")
      this.setState({ open: false})
      //this.props.login ?
      //this.props.dispatch({type:"TOGGLER", toggle: 3})
     // this.props.dispatch({type: "LOGIN", login: false})
      //:
      
      //this.props.dispatch({type: "LOGIN", login: true})
    }
    



handleclick=(e)=>{
    
    fetch(`https://api.ebay.com/buy/browse/v1/item/v1|${this.props.items.itemId[0]}|0`, {
        method: 'get',
        headers: {'Content-Type':'application/json', 'Authorization':'Bearer v^1.1#i^1#p^1#f^0#r^0#I^3#t^H4sIAAAAAAAAAOVYa2wUVRTudrcLhQKBEDBFzToUJJKZvTOzrxnYxaXlsbHQLbvySpo6jztl7OzMMg/a9QeWGsD4Q+IjgajBajD+kBgqGBLQxoAYCaIBg9ESE0wTJTESAhIQIfXO7LZsKwFKF2ni/tnMueeee77vfOfeOwM6vJVPbVu+7eok17jyrg7QUe5ykRNBpbdi/mR3eXVFGShycHV11HR4Ot3nFxpcRsmyq6CR1VQD+tozimqwjjGKWbrKapwhG6zKZaDBmgKbiq+oZykCsFldMzVBUzBfoi6KiRIPRUGAQJAYKsyIyKoOxExrUYwLUUGKpkMcHQ6KATqAxg3DggnVMDnVjGIUIBkchHGSTFMUG4ywJEkwkeB6zLca6oasqciFAFjMSZd15upFud45Vc4woG6iIFgsEV+aaogn6pasTC/0F8WKFXhImZxpGUOfajUR+lZzigXvvIzheLMpC/FgGJg/ll9haFA2PpDMfaTvUB0iubAUIsN0AIhSmI6UhMqlmp7hzDvnYVtkEZccVxaqpmzm7sYoYoN/Hgpm4WklCpGo89l/jRanyJIM9Si2ZHF8XTyZxGIcL1rKRovDoaBlMlAX8OSqOlyiREaguFAYp8hgCFDBUGGhfLQCzcNWqtVUUbZJM3wrNXMxRFnD4dwEirhBTg1qgx6XTDujQT8qDcAAh2FmvV3UfBUtc4Nq1xVmEBE+5/HuFRicbZq6zFsmHIwwfMChCLVNNiuL2PBBR4sF+bQbUWyDaWZZv7+trY1oowlNb/FTAJD+tSvqU8IGmOEw5Gv3et5fvvsEXHagCBDNNGTWzGVRLu1IqygBtQWL0UwgyDAF3oemFRtu/ZehCLN/aEeUqkNIXqQjnBikKCYihGipFB0SK4jUb+cBeS6HZzi9FZpZhRMgLiCdWUiwssjSQYmiIxLExRAj4QFGknA+KIZwUoIQQMjzAhP5PzXKvUo9JWhZmNQUWciVRPClE7suJjndzKWgoiDDvar+tiANG+QDh2f3+ogg2jEMFITLyoStbQKpyq9xaFOzTc1O1qPCHc9mE5mMZXK8AhOl2dAe0mZ2W3gyOu7HFCZUv3whZTF/ThNONQljk0Do0NAsHV1RiAb72EprrVBFm4Cpa4oC9dXkqAs9xuo7wr3y/nCX7qAeIW671x+otgVFRhJqfjjoHnJVZc4cW6gRKCoSCUaY0XVprVPTdO4/OItGBG+5ZphQHB00dBEcW6BsXQ7IkiJ5Cg8HIIkHaIrHIzxF4yKkwb1B9kRHdJn2D321j5U5P7LT9SnodHWXu1zAD+aQs8ETXvezHndVtSGbkJA5iTDkFhW9seqQaIW5LCfr5V6X/Prp7WeKPiZ0NYFHBj8nVLrJiUXfFsCjt0YqyCkzJ5EMCJMkRQUjJLkezL416iFneKZPS9XUbQJ/b9nZ8Mf8y9LFri+q+SNg0qCTy1VR5ul0ldFVC2Tx4+7rhw4HzlS+dO7pG9ip8/1PftLV33dp6sGeb/ff3Fd38IUP17xxtP+bGyd3HHmHvHRsVl3mr8enbPyu98rWQ/zi3398dU/nssnTFW/TWW814f16puitEI5l9/a4DwT69l6gP4dvvdwm9M14bqL7I/crF66eSMxtbTzVvRBU9vibF1T19l5Jv7ai58T+3mTH9blHxl+beu7nenzzL1Z9/4Xds3dVZ6qix7cf7X/vTHPj++3f9/3564FF625++Vn92xNaJr/b91Xt8eqzR5Ufxjctu+xZc3L3nkU7u7fOGrebffHwbzum7WI2zwusvZiQaq7NWdvrPv2BO7ml6c0GrWlf/WMTntk6L/lTY758/wA7YWOG5hEAAA=='},
        }
      )
        .then(response => response.json())
        .then(data => this.setState({item:data}))
    
        this.setState({open:true})
      }
    

    
      handlecart=()=>{
        let x = this.state.cart
        x.push(this.state.item)
        let item = {
          user_id: localStorage.getItem('id'),
          itemebayid: this.props.items.itemId[0],
          price:this.state.item.price.value,
          itemtitle:this.state.item.title,
          remark:this.state.item.shortDescription,
          image:this.props.items.galleryURL[0], 
          status: "activate"  

          }
          console.log(item)
       // this.setState({cart: x})
        //this.setState({open:false})
        //this.setState({open2:true})
        fetch ('http://localhost:3000/cart',{
        //this.props.dispatch({type: "TOGGLER", toggle: 3 })
        method: "POST",
        headers: {
        "Content-Type": "application/json", 
        
        'Access-Token': localStorage.getItem('token')
       
          },

        body: JSON.stringify(item)

      }).then (response => response.json())
      .then(data => {
        if (data.errors){
         console.log(data.errors)


        } 
        })
        
        this.click()
       
       alert("item added to cart")
        
        //localStorage.setItem('1',JSON.stringify(item))
        //console.log(this.state.cart,item)
        //this.setState({open:false})

   //    this.props.carttot() 

      }

      handlecartclose = () => {
        console.log("clicked")
        
        //this.props.login ?
        //this.props.dispatch({type:"TOGGLER", toggle: 3})
       // this.props.dispatch({type: "LOGIN", login: false})
        //:
        
        //this.props.dispatch({type: "LOGIN", login: true})

    //     "itemebayid"
    // t.integer "price"
    // t.string "itemtitle", null: false
    // t.string "remark"

      }


     //   if (this.state.toggle){
       // this.setState({toggle:false})
        //}
        ///else 
        //{
        //this.setState({toggle:true})
       // }
   // }
    
    

    
    render(){
     console.log(this.state.open)   
   // console.log(this.props.items.sellingStatus[0].currentPrice[0].__value__)
   const { open, open2, closeOnEscape, closeOnDimmerClick } = this.state

   console.log(this.props.items.itemId[0]) 
   console.log(this.state.item)
   
   // const background={
    //   background-image: url("./Components/background2.jpg");
    //   background-size: cover;
    //   background-repeat: no-repeat;
    
    
    
    
    
    return(

       // this.state.toggle ? 
        <fragment>
         <Modal   
        open={open}
      closeOnEscape={closeOnEscape}
      closeOnDimmerClick={closeOnDimmerClick}
      onClose={this.close}     >
    <Modal.Header>{this.state.item.title} 
    {/* <Button onClick={this.closeConfigShow(false, true)}>No Close on Escape</Button>
        <Button onClick={this.closeConfigShow(true, false)}>No Close on Dimmer Click</Button> */}
        <Button onClick={this.click}>Close</Button>
</Modal.Header>


    <Modal.Description>
        <Header>Description</Header>
        <p>{this.state.item.shortDescription?this.state.item.shortDescription: null }</p>
          <p>BRAND - {this.state.item.brand}</p>  
          <p>Condition-{this.state.item.condition}</p>
          <p>Color-{this.state.item.color}</p>
          <p>Price-$-{this.state.item.price?(this.state.item.price.currency,this.state.item.price.value):null}</p>
          <p>Location- City-{this.state.item.itemLocation?this.state.item.itemLocation.city:null}-Country-{this.state.item.itemLocation?this.state.item.itemLocation.country:null}</p> 
          <p> SHIPPING FREE ALWAYS ON AZAM MART </p>  
  </Modal.Description>
  <button onClick={this.handlecart}>  Add to Cart </button> 
    <Modal.Content image={null}>
      {this.state.item.additionalImages?this.state.item.additionalImages.map(img=><Image wrapped size='fullscreen' src={img.imageUrl} height="500" width="700"/>)
        :null      
      }
            {<Image wrapped size='fullscreen' src={this.props.items.galleryURL} height="500" width="700"/>}

    
    
      <Image wrapped size='fullscreen' src={null} height="830" width="940"/> 

      
    </Modal.Content>
  </Modal>   






  


  


        



    
        <div className="card">
        
        
         <h2 style={{fontSize:"15px"}} >{this.props.items.title[0].slice(0,35)}</h2> 
        {/* <img src={this.props.items.galleryURL} className="toy-avatar" /> */}
        <img src={this.props.items.galleryURL} height="330" width="240"/>
        <h3>${this.props.items.sellingStatus[0].currentPrice[0].__value__}</h3> 
        
        <button className="button" onClick={this.handleclick}>Details</button>


    </div>

    </fragment>
        //:
        // <div>
        //     <Modall image={this.props.items.galleryURL} title={this.props.items.title} id={this.props.items.itemId[0]}/>

        // </div>
        
    //     <div>
    //   <Card className="card-style" onClick={this.props.clicked}>
    //     <CardImg top width="100%" src={this.props.items.galleryURL} alt="Card image cap" />
    //     <CardBody>
    //       <CardTitle >{this.props.title}</CardTitle>
    //       <CardSubtitle>${this.props.price}</CardSubtitle>
    //       <CardText>{this.props.description}</CardText>
    //     </CardBody>
    //   </Card>
    // </div>
 
    
    //     <Grid>
    //             <Grid.Row columns={3} >
    //             <Grid.Column rows={1}> 

    //             <Image src={this.props.items.galleryURL} />
    //   </Grid.Column>
    //   {/* <Grid.Column>
    //     <Image src={this.props.items.galleryURL}/>
    //   </Grid.Column>
    //   <Grid.Column>
    //     <Image src={background1}/>
    //   </Grid.Column> */}
    // </Grid.Row>
    // </Grid>
 )
 }
}
// let stateTOProps =(state) =>{
//   return {
//     Toggle: state.menu.toggle,
//     Search: state.menu.search,
//     Item: state.menu.item,
//     Count: state.menu.count,
//     Cart: state.menu.cart
  
//   }
  
  
//   }
  
  
//   export default connect(stateTOProps)(Maincontainer)
  