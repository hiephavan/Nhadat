import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../../../../../actions/index'

class Cate extends Component {
onClick =(filterBy)=> {
  this.props.onFilterCate({
    name: filterBy
  });
}
onCateBoolean =() =>{
  this.props.onCateBool()
}
  render() {
    var {cateBool} = this.props
     var {bCate} = this.props
return (
		<div onClick ={this.onCateBoolean} className={cateBool===true? "dropdown listing_filter_select filter_category open ":"dropdown listing_filter_select filter_category"}>
          <div data-toggle="dropdown" id="a_filter_categ" className="filter_menu_trigger" data-value="Categories"> {bCate.name}  <span className="caret caret_filter">
            </span>
          </div>
          <ul className="dropdown-menu filter_menu" role="menu" aria-labelledby="a_filter_categ">
            <li onClick = {()=>this.onClick('Các loại')} role="presentation" data-value="all">Các loại</li>
            <li onClick = {()=>this.onClick('Căn hộ')} role="presentation" data-value="apartments">Căn hộ</li>
            <li onClick = {()=>this.onClick('Chung cư')} role="presentation" data-value="condos">Chung cư</li>
            <li onClick = {()=>this.onClick('Căn nhà')} role="presentation" data-value="houses">Căn nhà</li>
            <li onClick = {()=>this.onClick('Công xưởng')} role="presentation" data-value="industrial">Công xưởng</li>
            <li onClick = {()=>this.onClick('Đất')} role="presentation" data-value="land">Đất</li>
            <li onClick = {()=>this.onClick('Văn phòng')} role="presentation" data-value="offices">Văn phòng</li>
            <li onClick = {()=>this.onClick('Trả góp')} role="presentation" data-value="retail">Trả góp</li>
            <li onClick = {()=>this.onClick('Biệt thự')} role="presentation" data-value="villas">Biệt thự</li>
          </ul>
        </div>
)
}
}
const mapStateToProps=(state) =>{
  return {
    bCate : state.bCate,
    cateBool: state.bCateBool
  }
}
const mapDispatchToProps=(dispatch, props) =>{
  return {
    onFilterCate:(cate) =>  {
      dispatch(actions.bCate(cate))

    },
    onCateBool: () => {
      dispatch(actions.bCateBool())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cate);

