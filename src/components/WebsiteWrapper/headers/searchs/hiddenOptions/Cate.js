import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../../../../../actions/index'
class Cate extends Component {
onClick =(filterBy)=> {
	this.props.onCategories({
		name: filterBy,

	});
}
onCate =() =>{
	this.props.onShowCate()
}
  render() {
  	var {cate} = this.props
  	console.log(this.props.cate)
    return (
    	<div className="col-md-3 categories">
		            <div  onClick = {()=>this.onCate()} className= {this.props.cateBool===true? "dropdown form-control open": 'dropdown form-control'}>
		              <div data-toggle="dropdown" id="adv_categ" className=" filter_menu_trigger  " xx all categories data-value="all">{cate.name}<span className="caret  caret_filter ">
		                </span>
		              </div>
		              <input type="hidden" name="filter_search_type[]" defaultValue />
		              <ul id="categlist" className="dropdown-menu filter_menu" role="menu" aria-labelledby="adv_categ">
		                <li  onClick ={ ()=>this.onClick('Tất cả' ) } role="presentation" data-value="all">Tất cả</li>
		                <li  onClick ={ ()=>this.onClick('Căn hộ') } role="presentation" data-value="apartments">Căn hộ</li>
		                <li  onClick ={ ()=>this.onClick('Chung cư') } role="presentation" data-value="condos">Chung cư</li>
		                <li  onClick ={ ()=>this.onClick('Nhà') } role="presentation" data-value="houses">Nhà</li>
		                <li  onClick ={ ()=>this.onClick('Công nghiệp') } role="presentation" data-value="industrial">Công nghiệp</li>
		                <li  onClick ={ ()=>this.onClick('Sân bãi') } role="presentation" data-value="land">Sân bãi</li>
		                <li  onClick ={ ()=>this.onClick('Văn phòng') } role="presentation" data-value="offices">Văn phòng</li>
		                <li  onClick ={ ()=>this.onClick('Trả góp') } role="presentation" data-value="retail">Trả góp</li>
		                <li  onClick ={ ()=>this.onClick('Biệt thự') } role="presentation" data-value="villas">Biệt thự</li>
		              </ul>
		            </div>
		          </div>
)
}
}
const mapStateToProps=(state) =>{
  return {
    cate : state.cate,
    cateBool: state.cateBool
  
  }
}
const mapDispatchToProps=(dispatch, props) =>{
  return {
    onCategories:(cate) =>  {
      dispatch(actions.categories(cate))

    },
    onShowCate: () =>
    {
    	dispatch(actions.cateBool())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cate);


