import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../../../../../actions/index'

class Area extends Component {
  onClick =(filterBy)=> {
  this.props.onFilterArea({
    name: filterBy
  });
}
onAreaBoolean =() =>{
  this.props.onAreaBool()
}
  render() {
    var {areaBool} = this.props
     var {area} = this.props
return (
		<div onClick ={this.onAreaBoolean} className={this.props.areaBool===true? "dropdown listing_filter_select filter_area open ":"dropdown listing_filter_select filter_area"}>
          <div data-toggle="dropdown" id="a_filter_areas" className="filter_menu_trigger" data-value="Areas">{area.name} <span className="caret caret_filter">
            </span>
          </div>
          <ul id="filter_area" className="dropdown-menu filter_menu" role="menu" aria-labelledby="a_filter_areas">
            <li onClick = {()=>this.onClick('Khu vực')} role="presentation" data-value="all">Khu vực</li>
            <li onClick = {()=>this.onClick('Miền Bắc')}role="presentation" data-value="calais" data-parentcity="montreuil">Miền Bắc</li>
            <li onClick = {()=>this.onClick('Miền Trung')}role="presentation" data-value="clape-en-bas" data-parentcity="montreuil">Miền Trung</li>
            <li onClick = {()=>this.onClick('Miền Nam')}role="presentation" data-value="bayonne" data-parentcity="paris">Miền Nam</li>
          </ul>
        </div>
)
}
}
const mapStateToProps=(state) =>{
  return {
    area : state.area,
    areaBool: state.areaBool
  }
}
const mapDispatchToProps=(dispatch, props) =>{
  return {
    onFilterArea:(area) =>  {
      dispatch(actions.bArea(area))

    },
    onAreaBool: () => {
      dispatch(actions.bAreaBool())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Area);


