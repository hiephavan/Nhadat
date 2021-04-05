import React, { Component } from 'react';
import { Container,Dropdown } from 'semantic-ui-react'
import {connect } from 'react-redux'
import * as actions from './../../../../actions/index'

class Types extends Component {

onClick =(findby) =>{
	this.props.onShowTypes(findby)
	}

  render() {
  	console.log(this.props.type)
    return (

		<div  className="col-md-2">
		    <div  className= "dropdown form-control">
			  <div data-toggle="dropdown" id="adv_actions" className="filter_menu_trigger" data-value="all" aria-expanded="true">
			    {this.props.type.name} <span className="caret caret_filter" /></div>
			  <input type="hidden" name="filter_search_action[]" defaultValue="all" />
			  <ul className="dropdown-menu filter_menu" role="menu" aria-labelledby="adv_actions">
			    <li onClick={()=>this.onClick('Loại')} role="presentation" data-value="all">Types</li>
			    <li onClick={()=>this.onClick('Cho thuê')} role="presentation" data-value="rentals">Rentals</li>
			    <li onClick={()=>this.onClick('Bán')} role="presentation" data-value="sales">Sales</li>
			  </ul>
			</div>
		</div>
	)
}
}
const mapStateToProps=(state) =>{
  return {
    type: state.Types
  }
}
const mapDispatchToProps=(dispatch, props) =>{
  return {
    onShowTypes: (type) =>  {
      dispatch(actions.Types(type))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Types);

