import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../../../../actions/index'
import ListingModelShow from './listingModels/listingModelShow'
import ListingModelHidden from './listingModels/listingModelHidden'

class listingModel extends Component {
	onClick = ()=> {
	this.props.onModelShow();
	}	
 render() {


 return (
    <div className="elementor-widget-container">
		<ListingModelShow />
		{this.props.modelShow ===false?
		<div className="button_next"  style ={{  marginTop: '20px'}}>
		    	<button onClick ={this.onClick} type="button" className="btn btn-default">Xem tiếp <i style ={{marginLeft: '5px'}} className="fas fa-angle-double-down"></i> </button>
		</div> : ''
		} 

		{this.props.modelShow ===true? <ListingModelHidden /> : ''} 
	</div>
)	
}
}
const mapStateToProps=(state) =>{
  return {
    modelShow : state.modelShow,
  
  }
}
const mapDispatchToProps=(dispatch, props) =>{
  return {
    onModelShow:() =>  {
      dispatch(actions.modelShow())
  }
}
} 
export default connect(mapStateToProps,mapDispatchToProps)(listingModel);



