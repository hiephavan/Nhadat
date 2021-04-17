import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../../../../../actions/index'
class Bed extends Component {
	onClick =(filterBy)=> {
	this.props.onBed({
		value: filterBy,

	});
}
onBed =() =>{
	this.props.onShowbed()
}
  render() {
  	var {bed} = this.props
    return (
    	<div className="col-md-3 property_bedrooms">
		            <div onClick = {()=>this.onBed()} className= {this.props.bedBool===true? "dropdown form-control open": 'dropdown form-control'}>
		              <div data-toggle="dropdown" id="bedrooms" className=" filter_menu_trigger  " xx all bedrooms data-value="all">{bed.value===0? 'Phòng ngủ' : bed.value} <span className="caret  caret_filter ">
		                </span>
		              </div>
		              <input type="hidden" name="bedrooms" defaultValue />
		              <ul id="search-bedrooms" className="dropdown-menu filter_menu" role="menu" aria-labelledby="bedrooms">
		                <li onClick ={ ()=>this.onClick(0) } role="presentation" data-value="all">Phòng ngủ</li>
		                <li onClick ={ ()=>this.onClick(1) } data-value={1} value={1}>1</li>
		                <li onClick ={ ()=>this.onClick(2) }data-value={2} value={2}>2</li>
		                <li onClick ={ ()=>this.onClick(3) } data-value={3} value={3}>3</li>
		                <li onClick ={ ()=>this.onClick(4) }data-value={4} value={4}>4</li>
		                <li onClick ={ ()=>this.onClick(5) }data-value={5} value={5}>5</li>
		                <li onClick ={ ()=>this.onClick(6) } data-value={6} value={6}>6</li>
		                <li onClick ={ ()=>this.onClick(7) } data-value={7} value={7}>7</li>
		                <li onClick ={ ()=>this.onClick(8) }data-value={8} value={8}>8</li>
		                <li onClick ={ ()=>this.onClick(9) }data-value={9} value={9}>9</li>
		                
		              </ul>
		            </div>
		          </div>
)
}
}
const mapStateToProps=(state) =>{
  return {
    bed : state.bed,
    bedBool: state.bedBool
  
  }
}
const mapDispatchToProps=(dispatch, props) =>{
  return {
    onBed:(bed) =>  {
      dispatch(actions.bed(bed))

    },
    onShowbed: () =>
    {
    	dispatch(actions.bedBool())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Bed);
