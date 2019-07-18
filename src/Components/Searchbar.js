import React,{Component} from 'react';
import { Search, Divider, Label, Button } from 'semantic-ui-react'

export default class Searchbar extends Component{












render(){

return(
<div>

<Search placeholder="Type to Search" size="massive" icon='search icon' ref="search" />
            <button class="ui button" onClick={()=>this.props.search(this.refs.search)}> Click Here TO Search! </button>

            </div>







)









}



}