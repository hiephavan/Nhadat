// import React, { Component } from 'react';
// import {connect } from 'react-redux'
// import * as actions from './../../../../actions/index'
// import Cate from './hiddenOptions/Cate'
// import Bath from './hiddenOptions/Bath'
// import Bed from './hiddenOptions/Bed'
// import Story from './hiddenOptions/Story'
// import Size from './hiddenOptions/Size'
// import Year from './hiddenOptions/Year'
// import Price from './hiddenOptions/Price'
// class Hidden extends Component {
//  onToggleSearch=()=>{
//  		return this.props.onToggleSearch()
//  		console.log(this.props.onToggleSearch())
//  	}
//   render() {
      
//       return (

// 		<div className="adv_search_hidden_fields" style={{ display: this.props.onToggleSearch()===true? 'block' : 'none'}}>
// 	          <Cate />
// 	          <Bed />
// 	          <Bath />
// 	          <Story />
// 	          <Size />
// 	          <Year />
// 	          <Price />
// 		</div>
// )
// }
// }
// const mapStateToProps=(state) =>{
//   return {
//     ToggleSearch: state.ToggleSearch
//   }
// }
// const mapDispatchToProps=(dispatch, props) =>{
//   return {
//     onToggleSearch: () =>  {
//       dispatch(actions.toggleSearch())
//     }
//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Hidden);


