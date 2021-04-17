import React, { Component } from 'react';
import * as actions from './../../../../actions/index'
import { CSSTransition } from "react-transition-group";
import styled, { keyframes } from 'styled-components'
import {Animated} from "react-animated-css";
import {connect } from 'react-redux'
import Cate from './hiddenOptions/Cate'
import Bath from './hiddenOptions/Bath'
import Bed from './hiddenOptions/Bed'
import Story from './hiddenOptions/Story'
import Size from './hiddenOptions/Size'
import Year from './hiddenOptions/Year'
import Price from './hiddenOptions/Price'
const pulse= keyframes`
  from {
    height: 0px;
  }
  to {
  	
    height: 200px;
}
`;
	  



class Submit extends Component {
	onToggleSearch=()=>{
 		return this.props.onToggleSearch()
 	}
render() {
	console.log(this.props)
      return (
    <div className='adv-search-1  adv_extended_class' id="adv-search-1" >
        <div className="col-md-2">
			
		    <div onClick = {this.onToggleSearch} className="adv_handler">
				    <i className="fas fa-sliders-h" aria-hidden="true">
				    </i>
			</div>
			<input name="submit" type="submit" className="wpresidence_button" id="advanced_submit_10" value="Tìm kiếm" />
		</div>
		<div className="adv_search_hidden_fields" style={ this.props.ToggleSearch===true? {opacity: '1',transition:'all 0.3s ease-out' , heigth: '250px', overflow: 'inherit', paddingBottom: '120px'}: {}}>
		          <Cate />
		          <Bed />
		          <Bath />
		          <Story />
		          <Size />
		          <Year />
		          <Price />
		</div>
		
	</div>
)
}
}
const mapStateToProps=(state) =>{
  return {
    ToggleSearch: state.ToggleSearch
  }
}
const mapDispatchToProps=(dispatch, props) =>{
  return {
    onToggleSearch: () =>  {
      dispatch(actions.toggleSearch())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Submit);


