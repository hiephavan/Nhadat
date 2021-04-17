import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../../../../../actions/index'
class Bath extends Component {
	onClick =(filterBy)=> {
	this.props.onBath({
		value: filterBy,

	});
}
onShowBath =() =>{
	this.props.showBath()
	
}
  render() {
  	var {bath} =this.props
    return (
    	<div className="col-md-3 property_bathrooms">
		            <div onClick = {()=>this.onShowBath()} className= {this.props.bathBool===true? "dropdown form-control open": 'dropdown form-control'}>
		              <div data-toggle="dropdown" id="min-baths" className=" filter_menu_trigger  " xx all min baths data-value="all"> {bath.value===0? 'Phòng tắm' : bath.value} <span className="caret  caret_filter ">
		                </span>
		              </div>
		              <input type="hidden" name="min-baths" defaultValue />
		              <ul id="search-min-baths" className="dropdown-menu filter_menu" role="menu" aria-labelledby="min-baths">
		                <li onClick ={ ()=>this.onClick(0) } role="presentation" data-value="all">Phòng tắm</li>
		                <li onClick ={ ()=>this.onClick(1 ) } data-value={1} value={1}>1</li>
		                <li onClick ={ ()=>this.onClick(2 ) } data-value={2} value={2}>2</li>
		                <li onClick ={ ()=>this.onClick(3 ) } data-value={3} value={3}>3</li>
		                <li onClick ={ ()=>this.onClick(4 ) } data-value={4} value={4}>4</li>
		                <li onClick ={ ()=>this.onClick(5 ) } data-value={5} value={5}>5</li>
		                <li onClick ={ ()=>this.onClick(6 ) } data-value={6} value={6}>6</li>
		                <li onClick ={ ()=>this.onClick(7 ) } data-value={7} value={7}>7</li>
		                <li onClick ={ ()=>this.onClick(8 ) } data-value={8} value={8}>8</li>
		                <li onClick ={ ()=>this.onClick(9 ) } data-value={9} value={9}>9</li>
		              </ul>
		            </div>
		          </div>
)
}
}
const mapStateToProps=(state) =>{
  return {
    bath : state.bath,
    bathBool: state.bathBool
  
  }
}
const mapDispatchToProps=(dispatch, props) =>{
  return {
    onBath:(bath) =>  {
      dispatch(actions.bath(bath))

    },
    showBath: () =>
    {
    	dispatch(actions.bathBool())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Bath);