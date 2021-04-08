import React, { Component } from 'react';
import { Container,Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from './../../../../actions/index'

class Types extends Component {

onClick =(filterBy, value)=> {
	this.props.onFilterTypes({
		name: filterBy
	});
}
onBoolean =() =>{
	this.props.onBoolean()
}
  render() {
   console.log(this.props.filter)
   var { filter } = this.props
   console.log(this.props.boolean)
    return (
    	
		<div  className="col-md-2">
		    <div onClick = {this.onBoolean} className= {this.props.boolean===true? "dropdown form-control open": 'dropdown form-control'}>
			  <div  data-toggle="dropdown" id="adv_actions" className="filter_menu_trigger" data-value="all" aria-expanded="true">
			    {filter.name } <span className="caret caret_filter" /></div>
			  <input type="hidden" name="filter_search_action[]" defaultValue="all" />
			  <ul className="dropdown-menu filter_menu" role="menu" aria-labelledby="adv_actions">
			    <li onClick ={ ()=>this.onClick('Tất cả') } role="presentation" data-value="all">Tất cả</li>
			    <li onClick ={ ()=>this.onClick('Cho thuê') } role="presentation" data-value="rentals">Cho thuê</li>
			    <li onClick ={ ()=>this.onClick('Bán') } role="presentation" data-value="sales">Bán</li>
			  </ul>
			</div>
		</div>
	)
}
}
const mapStateToProps=(state) =>{
  return {
    filter : state.Filter,
    boolean: state.boolean
  }
}
const mapDispatchToProps=(dispatch, props) =>{
  return {
    onFilterTypes:(filter) =>  {
      dispatch(actions.filterTypes(filter))

    },
    onBoolean: () => {
    	dispatch(actions.boolean())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Types);


