import React, {Component} from 'react'

import { Button, Header, Image, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { thisExpression, thisTypeAnnotation } from '@babel/types';

class Modall extends Component{
constructor(){
  super()
  this.state={
  images: [],
  item: [],
  click:0,
  toggle: true
  } 
}
//const { open, closeOnEscape, closeOnDimmerClick } = this.state

  state = { open : false}

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


componentDidMount(){

 // var images

// fetch(
//   'http://localhost:3000/orders/search')

  
//    .then(response => response.json())
// // .then(data => console.log(data.findItemsByKeywordsResponse[0].searchResult[0].item))
// .then(data => this.setState({item:data}))  
// // .then(() => console.log(item))
// fetch('https://api.ebay.com/buy/browse/v1/item/v1|153507924507|0'
  fetch(`https://api.ebay.com/buy/browse/v1/item/v1|${this.props.id}|0`, {
    method: 'get',
    headers: {'Content-Type':'application/json', 'Authorization':'Bearer v^1.1#i^1#r^0#I^3#f^0#p^1#t^H4sIAAAAAAAAAOVYXWwUVRTu9g8aqBAhUkmD61BA0Nm9Mzuz25mwq0sLYZX+2C4VGgnembnTHTo7s8ydod2o2FSlJkpQFIhBsASND/xFUkTCg4nhL2l8ISGiITygRhKCLwYoGBPvbLdlWwlQukgT92Uz55577vm+85177wzoKi1btGn5phvlnkmFvV2gq9DjYaaAstKSZx8rKpxdUgByHDy9XVVdxd1FlxdjmNRTYhPCKdPAyNuZ1A0sZoxhyrEM0YRYw6IBkwiLtiw2R+tWiKwPiCnLtE3Z1ClvrDZMMVCWFF7igkDgAwpfTazGUMy4GaaQKvEhJsAHApLECKEQGcfYQTED29CwwxQLGIEGQZrh4iwQgSACxhcKsa2UtwVZWDMN4uIDVCSTrpiZa+XkevdUIcbIskkQKhKLLmtuiMZql9bHF/tzYkWyPDTb0HbwyKcaU0HeFqg76O7L4Iy32OzIMsKY8kcGVxgZVIwOJfMA6Weo5iUGMnI1qyoclADH5YXKZaaVhPbd83AtmkKrGVcRGbZmp+/FKGFDWodkO/tUT0LEar3u38sO1DVVQ1aYWrokujra2EhFoKQ4+noH0kg2k0lkyXRjUy2tsoogszAYolmGDwKWD2YXGoyWpXnUSjWmoWguadhbb9pLEMkajeCGEUQ+hxvi1GA0WFHVdjPK5ZAd4jAYbHWLOlhFx04Ybl1RkhDhzTzeuwLDs23b0iTHRsMRRg9kKApTMJXSFGr0YEaLWfl04jCVsO2U6Pd3dHT4OgI+02rzswAw/lV1K5rlBEpCivi6vT7or917Aq1loMiIzMSaaKdTJJdOolWSgNFGRQICxwtClveRaUVGW/9lyMHsH9kR+eoQjg1xKgd5hkXBAAzmo0EiWY363TSQBNN0ElrtyE7pUEa0TGTmEL1qihjgVTZQrSJaCQoqzQmqSku8QhZTEQIISZIsVP+f+uR+ld4smynUaOqanM6L3vOndUtphJadbka6Tgz3K/o7gsQuyIcPz+31sUB0Y2ASBKY0n6ttH1GV34RkT3NNazNZjwt3NJWKJZOODSUdxfKznz2iveyO8DRy2k8oTKR+g4XUlMFj2peppg9vkH0WwqZjkRuKr8E9teJmOzLIJmBbpq4jq4UZd6EnWH3HuFc+GO78ndNjxe32+sPUtqxrREJrHxG6R1tVDdoTC7ULiudYgRtfl9ZkahpP/xdn0VjgLTexjZTxQSP3wIkFytXlkCxZRmLpEIcYmguwEl0tsQFaQQFwn5CLF4/lLu0f+WYfKcj8mG7PEdDt+brQ4wF+MI+ZC54uLVpZXDR1NtZs5NOg6sNam0FeWC3ka0fpFNSswlKPtvVsz7mcbwm9a0DF8NeEsiJmSs6nBVB5e6SEmTarnBFAkOEIbQJgWsHc26PFzBPFMy+sutX78eq3Zh2YPnAtXHrx8oF3pm4G5cNOHk9JQXG3p+CpvT3XuzrNuhkv8p9u7V6LB3bfnP94gt6149q+GRvOXd815Xlp/5wvd39y4o1TPUUn2XfRuT3x515bt5da82p9z1GvdXjFm607VaHoi4Gm+a8rZzb9supo5VcLZi7c8t3BKub0JM9NZWflC/EftL7++dP9K3//s+qbaRf3vNJSuP+PZy5VPpk4dejIvtCcQ33vrTy25vDV857JPyfqOvYHzl4q79+8Bdckjlzd9VkaJjcfP/Zb6fRDiz7avWDe9m1nqgp+GjjubI85ekn9ByHp29Nn+yv6fz2x89S+D/n24OQLZX17FtzQv79yvOLzjVd2gPPl4fhft348+ffCt19av8Q/7f0+XNF2sDy5Ldm0cbB8/wBYGHp75REAAA=='},
    }
  )
    .then(response => response.json())
    .then(data => this.setState({item:data}))

    this.setState({open:true})
  }

  render(){
  const { open, closeOnEscape, closeOnDimmerClick } = this.state

  //this.state.item.additionalImages
    console.log(this.props.id)
    console.log(this.state.item)
    console.log(this.state.item.brand)
    console.log(this.state.item.condition)   
    console.log(this.state.item.color)

  return(
    <div>
           
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
      
  </Modal.Description>
    <Modal.Content image={null}>
      {this.state.item.additionalImages?this.state.item.additionalImages.map(img=><Image wrapped size='fullscreen' src={img.imageUrl} height="500" width="700"/>)
        :null      
      }
            {<Image wrapped size='fullscreen' src={this.props.image} height="500" width="700"/>}

    <button> next Image </button>
    
      <Image wrapped size='fullscreen' src={null} height="830" width="940"/> 

      
    </Modal.Content>
  </Modal>
  </div>
  ) 
  
  }
}

  let stateTOProps =(state) =>{
    return {

      Toggle: state.menu.toggle,
      Search: state.menu.search,
      Item: state.menu.item,
      Count: state.menu.count,
      Login: state.menu.login
    }
  }
export default connect(stateTOProps)(Modall)

//trigger={<Button>Show Modal</Button>}

/* <Image wrapped size='fullscreen' src={this.state.item.additionalImages?this.state.item.additionalImages[1].imageUrl: null} height="830" width="940"/>  */


// this.state.item.additionalImages?this.state.item.additionalImages.map(img=> <button onClick={()=>this.check(img.imageUrl)}> Image </button>):null