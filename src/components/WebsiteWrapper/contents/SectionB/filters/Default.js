




import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../../../../../actions/index'

class Default extends Component {
  onClick =(filterBy)=> {
  this.props.onFilterDefault({
    name: filterBy
  });
}
onDefaultBoolean =() =>{
  this.props.onDefaultBool()
}
  render() {
    var {defaultBool} = this.props
     var {def} = this.props
return (
    <div onClick ={this.onDefaultBoolean} className={this.props.defaultBool===true? "dropdown listing_filter_select filter_default open ":"dropdown listing_filter_select filter_default"}>
          <div data-toggle="dropdown" id="a_filter_defaults" className="filter_menu_trigger" data-value="defaults">{def.name} <span className="caret caret_filter">
            </span>
          </div>
          <ul id="filter_order" className="dropdown-menu filter_menu" role="menu" aria-labelledby="a_filter_order">
            <li onClick = {()=>this.onClick('Mặc định')} role="presentation" data-value={0}>Mặc định</li>
            <li onClick = {()=>this.onClick('Giá cao đến thấp')} role="presentation" data-value={1}>Giá cao đến thấp</li>
            <li onClick = {()=>this.onClick('Giá thấp đến cao')} role="presentation" data-value={2}>Giá thấp đến cao</li>
            <li onClick = {()=>this.onClick('Tin mới nhất')} role="presentation" data-value={3}>Tin mới nhất</li>
            <li onClick = {()=>this.onClick('Tin cũ nhất')} role="presentation" data-value={4}>Tin cũ nhất</li>
            <li onClick = {()=>this.onClick('Số phòng ngủ cao dần')} role="presentation" data-value={5}>Số phòng ngủ cao dần</li>
            <li onClick = {()=>this.onClick('Số phòng ngủ thấp dần')} role="presentation" data-value={6}>Số phòng ngủ thấp dần</li>
            <li onClick = {()=>this.onClick('Số phòng tắm cao dần')} role="presentation" data-value={7}>Số phòng tắm cao dần</li>
            <li onClick = {()=>this.onClick('Số phòng tắm thấp dần')} role="presentation" data-value={8}>Số phòng tắm thấp dần</li>
            
          </ul>
        </div>
)
}
}
const mapStateToProps=(state) =>{
  return {
    def : state.def,
    defaultBool: state.defaultBool
  }
}
const mapDispatchToProps=(dispatch, props) =>{
  return {
    onFilterDefault: (def) =>  {
      dispatch(actions.bDefault(def))

    },
    onDefaultBool: () => {
      dispatch(actions.bDefaultBool())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Default);


