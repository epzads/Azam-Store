export default (state = {toggle: 1, login: true, item: [], search:"hello", count:0, cart: []}, action)=> {
switch (action.type){

  case "TOGGLER": {
   return {...state,toggle: action.toggle} 

  }

  case "SEARCHER": {
   return {...state,search: action.search} 

  }

  case "ITEMARRAY": {
    return {...state,item: action.item} 
 
   }
   
   case "COUNTER": {

    return {...state,item: action.count} 

     }
  case "LOGIN": {

    return {...state,login: action.login}
  }   



  default: return state;  

}



}