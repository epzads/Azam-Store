import React,{Fragment,Component} from 'react'
import Login from './Login'
import SignUp from './SignUp'
import PaypalExpressBtn from 'react-paypal-express-checkout';

import Mainmenu from './Mainmenu'
import Cardmain from './Card'
import Sidebar1 from './Sidebar'
import { Card } from 'semantic-ui-react'
import background1 from './background2.jpg'
import Searchbar from './Searchbar'
import { Header, Icon, Image, Menu, Segment, Sidebar, Modal, Button, Label } from 'semantic-ui-react'
import Hoverboard from './Hoverboard'
import { connect } from 'react-redux'
import Payment from './Payment'
 class Maincontainer extends Component {

  constructor(){
  super()
    this.state={
    condition:  1,
    items: [],
    search: "nokia",
    modelopen: false,
    item: [],
    errors: [],
    open: false,
    cart:[],
    total: 0,
    history: [],
    historyitem:[]
    
  }
}

    state = { open : false, open2: false, open3: false}
    closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => 
      {
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
   
  
  click2 = () => {
      console.log("clicked")
      this.setState({ open2: false})
      //this.props.login ?
      //this.props.dispatch({type:"TOGGLER", toggle: 3})
     // this.props.dispatch({type: "LOGIN", login: false})
      //:
      
      //this.props.dispatch({type: "LOGIN", login: true})
  }
  click3 = () => {
    console.log("clicked")
    this.setState({ open3: false})
    //this.props.login ?
    //this.props.dispatch({type:"TOGGLER", toggle: 3})
   // this.props.dispatch({type: "LOGIN", login: false})
    //:
    
    //this.props.dispatch({type: "LOGIN", login: true})
}


  componentDidMount(){

   
   



  fetch(
  'http://localhost:3000/search',{
  method: 'get',
  headers: {'Content-Type':'application/json', 'Access_Token': localStorage.getItem('token')
  }})
  
   .then(response => response.json())
// .then(data => console.log(data.findItemsByKeywordsResponse[0].searchResult[0].item))
.then(data => {
  this.setState({item:data.findItemsByKeywordsResponse[0].searchResult[0].item})
  //this.props.dispatch({type: "ITEMARRAY", item:data.findItemsByKeywordsResponse[0].searchResult[0].item})
  this.setState({search:"samsung"})
  //this.setState({items:data.findItemsByKeywordsResponse[0].searchResult[0].item})
//console.log(this.state.items)}




})
fetch(
 'http://localhost:3000/cart',{
  method: 'GET',
   headers: {'Content-Type':'application/json', 'Access-Token': localStorage.getItem('token')
   }})
       .then(response => response.json())  
    .then(data => {
       this.setState({cart:data})})
}

 carttotal(){
 let x = 0
  this.state.cart.map(item=> x += item.price) 
  //this.props.dispatch({type: "TOGGLER", toggle: 15})
  this.setState({total:x})
  console.log(x)
  
  //return this.props.toggle
  //return this.state.total 

 }



//debugger
    
  handlelogin=(e )=>{
  e.preventDefault()
  let username = e.target.parentElement.querySelector("#root > div > div > div.ui.segment > form > div:nth-child(1) > div > input[type=text]").value
  let password = e.target.parentElement.querySelector("#root > div > div > div.ui.segment > form > div:nth-child(2) > div > input[type=password]").value
  
  let object = {

    email: username,
    password: password
  }
  console.log(username,password)

  fetch ('http://localhost:3000/login',{
  //this.props.dispatch({type: "TOGGLER", toggle: 3 })
  method: "POST",
  headers: {
   "Content-Type": "application/json" 

  },

  body: JSON.stringify(object)

}).then (response => response.json())
.then(data => {
  if (data.errors){
    console.log(data.errors)
    this.setState({errors:data.errors})


  } else {
    localStorage.clear()
    localStorage.setItem("token",data.token)
    localStorage.setItem("id",data.id)
    this.props.dispatch({type: "TOGGLER", toggle: 3 })
  }
})

// if (localStorage.getItem('token') != "")
//   {
   

//   }
}
    
  handleSignup=(e,email,pass,firstname,last,address,phonenumber)=>{

  e.preventDefault()
  let object = {
  name: firstname.value + last.value,    
  email:email.value, 
  password: pass.value,
  address:address.value,
  phonenumber:phonenumber.value

 }
  console.log(object)
 
  console.log(email.value,pass.value,firstname.value,last.value,address.value)
  fetch('http://localhost:3000/users', {
  method: 'POST',
  headers: {'Content-Type':'application/json'
  },
  body: JSON.stringify({
       name: firstname.value+ last.value,    
      email: email.value,
      password: pass.value, 
       address: address.value,
      phonenumber:phonenumber.value
  }   
 )
})

.then (response => response.json())
.then(data => {
  if (data.errors){
    console.log(data.errors)
  }
  console.log(data)
})
this.props.dispatch({type: "TOGGLER", toggle: 1})
}

handleSignmenu=(e)=>{
  this.props.dispatch({type: "TOGGLER", toggle: 2})
}

handleSearch=(search)=>{
  console.log(search.state.value)
//console.log(this.props.Search)


  fetch('http://localhost:3000/search', {
  method: 'post',
  headers: {'Content-Type':'application/json'},
  body: JSON.stringify({
      
      search:search.state.value
    })})
//setTimeout(this.search2(e), 10000)
  fetch('http://localhost:3000/search')
  .then(response => response.json())
// .then(data => console.log(data.findItemsByKeywordsResponse[0].searchResult[0].item))
    .then(data => {
         this.setState({item:data.findItemsByKeywordsResponse[0].searchResult[0].item})
   // this.props.dispatch({type: "ITEMARRAY", item:data.findItemsByKeywordsResponse[0].searchResult[0].item})
   //this.setState({items:data.findItemsByKeywordsResponse[0].searchResult[0].item})
  //console.log(this.state.items)}
  })
  //this.props.dispatch({type: "TOGGLER", toggle: 0 })
  this.props.dispatch({type: "SEARCHER", search: search.state.value})
}

  handleHoverboard=(text)=>{
  //console.log(search.state.value)
  //console.log(this.props.Search)
  console.log(text)
  fetch('http://localhost:3000/search', {
  method: 'post',
  headers: {'Content-Type':'application/json'},
  body: JSON.stringify({
    
     search:text
  })})
  //setTimeout(this.search2(e), 10000)
  fetch('http://localhost:3000/search')
  .then(response => response.json())
// .then(data => console.log(data.findItemsByKeywordsResponse[0].searchResult[0].item))
    .then(data => {
      this.setState({item:data.findItemsByKeywordsResponse[0].searchResult[0].item})

      //this.props.dispatch({type: "ITEMARRAY", item:data.findItemsByKeywordsResponse[0].searchResult[0].item})
      //this.setState({items:data.findItemsByKeywordsResponse[0].searchResult[0].item})
      //console.log(this.state.items)}
    })
    //this.props.dispatch({type: "TOGGLER", toggle: 0 })
    this.props.dispatch({type: "SEARCHER", search: text})
}


  filter=()=>{
  //let y = this.props.Item.filter(item=>item.isMultiVariationListing != "true")
  let y = this.state.item.filter(item=>item.isMultiVariationListing != "true")
  let x = y.filter(item=>item.galleryURL != "http://thumbs1.ebaystatic.com/pict/04040_0.jpg")
    // if (this.props.Item.isMultiVariationListing)
    // {let y = x.filter(item=>item.isMultiVariationListing != "true")
    // //console.log (y[0].isMultiVariationListing)
    // return y// }
  let z = x.filter(item=>item.listingInfo[0].listingType[0] == "FixedPrice")
  let a = z.filter(item=>item.shippingInfo[0].shippingType[0] == "Free")
  let b = a.filter(item=>item.country[0] == "US" )
    //console.log(x[0].listingInfo[0].listingType[0])
    console.log(y)  
    return y
  } 

  search2(e){
  console.log(e.target.value)
  }

  
   //let y  = this.state.cart
   //debugger
  // let z = y.filter(item=>item[0].user_id == 1) 
   
   //console.log("z",z)
  //his.setState({cart:z}) 
  
  handlecheckout=()=>
  {
   let order = {
    user_id: localStorage.getItem('id'),
    total:this.state.total,
    status: "paid",
    //wishlist: "false"

  }    
    
   console.log(order) 

   fetch ('http://localhost:3000/neworder',{
        //this.props.dispatch({type: "TOGGLER", toggle: 3 })
        method: "POST",
        headers: {
        "Content-Type": "application/json", 
        
        'Access-Token': localStorage.getItem('token')
          
          },

        body: JSON.stringify(order)

      })

      // .then (response => response.json())
      // .then(data => console.log(data))
      this.pushitems()  
    
    
    }
    pushitems=()=>{
      let it 
    this.state.cart.map(item=>{
     it = {
     user_id: localStorage.getItem('id'), 
     itemebayid:item.itemebayid,
     price:item.price,
     itemtitle:item.itemtitle,
     remark:item.remark  

     } 
    console.log (it)

    fetch ('http://localhost:3000/items',{
      //this.props.dispatch({type: "TOGGLER", toggle: 3 })
      method: "POST",
      headers: {
      "Content-Type": "application/json", 
      
      'Access-Token': localStorage.getItem('token')
     
        },

      body: JSON.stringify(it)

    })

    // .then(response => {
    //   debugger;
    //   console.log(response)
    // })  
    //     .then(data => 
    //       console.log(data))




    }
    )
    
    fetch('http://localhost:3000/mail', {
      method: 'post',
     headers: {'Content-Type':'application/json'},
    body: JSON.stringify({

    user_id:localStorage.getItem('id')
})})

  
  
  
  
  }

  

  logoff=()=>{
  localStorage.clear()

  this.props.dispatch({type:"TOGGLER", toggle: 1})  


  }



  paypal=()=>{
    localStorage.clear()
  
    this.props.dispatch({type:"TOGGLER", toggle: 5})  
  
  
    }



  cartdisplay=()=>{
    this.carttotal()
    this.carttotal()
    fetch(
      'http://localhost:3000/cart',{
      method: 'GET',
      headers: {'Content-Type':'application/json', 'Access-Token': localStorage.getItem('token')
      }})
          .then(response => response.json())  
        .then(data => {
          this.setState({cart:data})})  
     

          //alert("cart open ")
          this.props.dispatch({type:"TOGGLER", toggle: 7})

  this.setState({open:true})
  //this.setState({open:false}) 
  //this.setState({open:true})  
  //this.setState({modalopen:true})
  this.props.dispatch({type:"TOGGLER", toggle: 7})
  
}
  
  
  
  wishdisplay=()=>{
  console.log("hello")

  fetch(
    'http://localhost:3000/order',{
    method: 'GET',
    headers: {'Content-Type':'application/json', 'Access-Token': localStorage.getItem('token')
    }})
        .then(response => response.json())  
      .then(data =>this.setState({history:data}))  
  
   
  this.setState({open2:true})
  }

  wishdisplayclose=()=>{
    console.log("hello")
  
    fetch(
      'http://localhost:3000/order',{
      method: 'GET',
      headers: {'Content-Type':'application/json', 'Access-Token': localStorage.getItem('token')
      }})
          .then(response => response.json())  
        .then(data =>this.setState({history:data}))  
    
     
    this.setState({open2:false})
    }

    purchaseitem=(id,total)=>{
     console.log("clicked",id,total) 
     fetch(
      'http://localhost:3000/items',{
      method: 'GET',
      headers: {'Content-Type':'application/json', 'Access-Token': localStorage.getItem('token'), 'Order': id
      }})
      .then(response => response.json())  
        .then(data =>this.setState({historyitem:data}))  
        
        this.setState({open3:true})

      }
  
    paymentsuccess=()=>{
      this.props.dispatch({type:"TOGGLER", toggle: 6})  
      this.handlecheckout()


    }  
    
    paymentfailure=()=>{
      this.props.dispatch({type:"TOGGLER", toggle: 6})  
      


    }  

    removecart=(item)=>{

      console.log("remove item from cart",item)


      fetch('http://localhost:3000/delcart/', {
  method: 'POST',
  headers: {'Content-Type': 'application/json','Access-Token': localStorage.getItem('token')},
  body: JSON.stringify({id: item.id})
})
.then(res => res.text()) // OR res.json()
.then(res => console.log(res))

this.setState({open:false})
alert("item removed from  cart")
this.setState({modalopen:true})




    }
  
    
  render(){

    const client = {
      sandbox:    'ATOycXUJEURBMysTyRgpRbUe8jGTvgnSMgGKEKwGgMnuPndRrTLFRGZ1Hto0ObygTuJ_yYefQ0N3y6GD',
     // production: 'YOUR-PRODUCTION-APP-ID',
  }   





  const onSuccess = (payment) => {
// 1, 2, and ... Poof! You made it, everything's fine and dandy!
          console.log("Payment successful!", payment);
          // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
  
             
              alert("Thank you for your Order Payment was successfull");



             this.handlecheckout()
              
              
             
            // fetch('http://localhost:3000/mail', {
           // method: 'post',
          //headers: {'Content-Type':'application/json'},
         //body: JSON.stringify({
    
         //user_id:localStorage.getItem('id')
  //})})
            
                  
  
          }
          const onCancel = (payment) => {
              // 1, 2, and ... Poof! You made it, everything's fine and dandy!
                      console.log("Payment cancelled", payment);
                      // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
                      alert("The Payment was cancelled or Failed Please Retry ");
      
                     // this.handlecheckout()
                     // this.props.failure()

                        
          
          
                  }      




  console.log(this.state.cart)
  //console.log(this.carttotal())
  const { open, open2, closeOnEscape, closeOnDimmerClick , open3} = this.state
  const SidebarExampleVisible = () => (

        <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='overlay' icon='labeled' inverted vertical visible width='thin'>
          <Menu.Item as='a'>
            <Icon name='home' />
            Home
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='gamepad' />
            Games
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='camera' />
            Channels
          </Menu.Item>
        </Sidebar>
    
        <Sidebar.Pusher>
          <Segment basic>
            <Header as='h3'>Application Content</Header>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
        )
    
  //console.log(this.state.items[0].item)
    //console.log(this.state.items[0].item[4].title)
    //console.log(this.state.items)
    if (this.props.Toggle == 1){
      return (
      <Login loginclick={this.handlelogin} sign={this.handleSignmenu}/>
      )
    }
    if (this.props.Toggle == 2){
      return (
      <SignUp signupclick={this.handleSignup}/>
      )
    }
    if (this.props.Toggle == 5){
      return (
      <Payment success={this.paymentsuccess} failure={this.paymentfailure} totaler={this.state.total}/>
      )
    }



  

    return(
    
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
     <Header>CART</Header>
    {/* {this.state.cart.map(item=><Image wrapped size='fullscreen' src={item.image} height="150" width="150"/>,item=>item.itemtitle)} */}
    <div class="ui list">
    <li>
    {this.state.cart.map(item=><li>{item.itemtitle},----${item.price},<img src={item.image}></img>, <button onClick={()=>this.removecart(item)}> remove</button></li>)}  </li>
     {/* <div>{this.state.cart.map(item=>item.image)}</div> */}
  
</div>
     <p>TOTAL =$ {this.state.total}</p>
  
       </Modal.Description>

{/* <button onClick={this.paypal}>  CHECKOUT </button>   */}
            <PaypalExpressBtn client={client} currency={'USD'} total={this.state.total} onSucess={onSuccess} onCancel={onCancel}/>

 <Modal.Content image={null}>
   {this.state.item.additionalImages?this.state.item.additionalImages.map(img=><Image wrapped size='fullscreen' src={img.imageUrl} height="500" width="700"/>)
     :null      
   }
         {<Image wrapped size='fullscreen' src={null} height="500" width="700"/>}

 
 
   <Image wrapped size='fullscreen' src={null} height="830" width="940"/> 

   
 </Modal.Content>
</Modal>   

<Modal   
     open={open2}
   closeOnEscape={closeOnEscape}
   closeOnDimmerClick={closeOnDimmerClick}
   onClose={this.close}     >
 <Modal.Header>{this.state.item.title} 
 {/* <Button onClick={this.closeConfigShow(false, true)}>No Close on Escape</Button>
     <Button onClick={this.closeConfigShow(true, false)}>No Close on Dimmer Click</Button> */}
     {/* <Button onClick={this.click2}>Close</Button> */}
</Modal.Header>


 <Modal.Description>
     <Header>PURCHASE HISTORY</Header>
     {/* {this.state.cart.map(item=><Image wrapped size='fullscreen' src={item.image} height="150" width="150"/>,item=>item.itemtitle)} */}
    <div className="ui list">
    <li>
    {this.state.history.map(item=><li className="sub-navigation-home-news" >OrderNO---{item.id},---OrderTotal-${item.total}, ---ORDER_STATUS-{item.status} <button onClick={()=>this.purchaseitem(item.id,item.total)}>View Items</button></li>)}  </li>
     {/* <div>{this.state.cart.map(item=>item.image)}</div> */}
  
</div>


       <p> SHIPPING FREE ALWAYS ON AZAM MART </p>  
</Modal.Description>
<button onClick={this.wishdisplayclose}>  close </button> 
 <Modal.Content image={null}>
   {this.state.item.additionalImages?this.state.item.additionalImages.map(img=><Image wrapped size='fullscreen' src={img.imageUrl} height="500" width="700"/>)
     :null      
   }
         {<Image wrapped size='fullscreen' src={null} height="500" width="700"/>}

 
 
   <Image wrapped size='fullscreen' src={null} height="830" width="940"/> 

   
 </Modal.Content>
</Modal>

<Modal   
     open={open3}
   closeOnEscape={closeOnEscape}
   closeOnDimmerClick={closeOnDimmerClick}
   onClose={this.close}     >
 <Modal.Header>{this.state.item.title} 
 {/* <Button onClick={this.closeConfigShow(false, true)}>No Close on Escape</Button>
     <Button onClick={this.closeConfigShow(true, false)}>No Close on Dimmer Click</Button> 
     <Button onClick={this.click3}>Close</Button> */}
</Modal.Header>


 <Modal.Description>
     <Header>PURCHASE  - ITEMS HISTORY</Header>
     {/* {this.state.cart.map(item=><Image wrapped size='fullscreen' src={item.image} height="150" width="150"/>,item=>item.itemtitle)} */}
    <div class="ui list">
    <li>
    {this.state.historyitem.map(item=><li className="sub-navigation-home-news">Item Name---{item.itemtitle},----${item.price}</li>)}  </li>
     {/* <div>{this.state.cart.map(item=>item.image)}</div> */}
  
</div>


       <p> SHIPPING FREE ALWAYS ON AZAM MART </p>  
</Modal.Description>
<button onClick={this.click3}>  close </button> 
{/* <button onClick={this.paypal}>  paypal </button>  */}
 <Modal.Content image={null}>
   {this.state.item.additionalImages?this.state.item.additionalImages.map(img=><Image wrapped size='fullscreen' src={img.imageUrl} height="500" width="700"/>)
     :null      
   }
         {<Image wrapped size='fullscreen' src={null} height="500" width="700"/>}

 
 
   <Image wrapped size='fullscreen' src={null} height="830" width="940"/> 

   
 </Modal.Content>
</Modal>







    
    <div className="grid-container">
      {/* <button onClick={this.paypal}/> */}
    <div className="item1"><Searchbar search={this.handleSearch}/></div>

    <div className="item2">
    <Hoverboard clicker={this.handleHoverboard}/>
    
    </div>  
    <div className="item3"></div>  
    <div className="item4">Select
    <div class="ui segment pushable">
    <div
    class="ui inverted vertical labeled icon ui overlay left thin visible sidebar menu"
      >
    <a class="item" onClick={this.cartdisplay} ><i aria-hidden="true" class="cart icon" ></i>Cart</a
    ><a class="item"onClick={this.wishdisplay}><i aria-hidden="true" class="list icon"></i>Purchase History</a
    ><a class="item" onClick={this.logoff}><i aria-hidden="true" class="home icon"></i>Log Off</a>
    
  </div>
  <div class="pusher">
    <div class="ui basic segment">
      <h3 class="ui header">Application Content</h3>
      <img
        src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
        class="ui image"
      />
    </div>
  </div>
</div>
</div>




    <div className="item5">
        
    
     <div id="card-container"> 
    <div id="toy-collection"> 

    {//this.state.items.map(i=><Cardmain items={i}/>)}
    
    //this.props.Item.map(i=><Cardmain items={i}/>)
    this.filter().map(i=><Cardmain items={i} carttot={this.carttotal}/>)
  }
    </div>
        </div> 
        </div>  
</div>
</fragment>
    
)

      

 }


}

let stateTOProps =(state) =>{
return {
  Toggle: state.menu.toggle,
  Search: state.menu.search,
  Item: state.menu.item,
  Count: state.menu.count


}


}


export default connect(stateTOProps)(Maincontainer)

