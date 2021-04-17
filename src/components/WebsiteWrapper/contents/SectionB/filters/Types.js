

import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../../../../../actions/index'

class Types extends Component {
  onClick =(filterBy)=> {
  this.props.onFilterTypes({
    name: filterBy
  });
}
onTypesBoolean =() =>{
  this.props.onTypesBool()
}
  render() {
    var {typesBool} = this.props
     var {bTypes} = this.props
return (
    <div onClick ={this.onTypesBoolean} className={this.props.typesBool===true? "dropdown listing_filter_select filter_types open ":"dropdown listing_filter_select filter_types"}>
          <div data-toggle="dropdown" id="a_filter_typess" className="filter_menu_trigger" data-value="typess">{bTypes.name} <span className="caret caret_filter">
            </span>
          </div>
          <ul id="filter_types" className="dropdown-menu filter_menu" role="menu" aria-labelledby="a_filter_typess">
            <li onClick = {()=>this.onClick('Tất cả')} role="presentation" data-value="all">Tất cả</li>
            <li onClick = {()=>this.onClick('Bán')}role="presentation" data-value="calais" data-parentcity="montreuil">Bán</li>
            <li onClick = {()=>this.onClick('Cho thuê')}role="presentation" data-value="clape-en-bas" data-parentcity="montreuil">Cho thuê</li>
           
          </ul>
        </div>
)
}
}
const mapStateToProps=(state) =>{
  return {
    bTypes : state.bTypes,
    typesBool: state.typesBool
  }
}
const mapDispatchToProps=(dispatch, props) =>{
  return {
    onFilterTypes:(bTypes) =>  {
      dispatch(actions.bTypes(bTypes))

    },
    onTypesBool: () => {
      dispatch(actions.bTypesBool())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Types);


