import React, { Component } from 'react';
import { useState } from "react";
import { connect } from 'react-redux'
import  MultiSelect  from "react-multi-select-component";
import * as actions from './../../../../actions/index'

 function SectionC2()  { 
	const options = [
    { label: "Grapes ", value: "grapes" },
    { label: "Mango ", value: "mango" },
    { label: "Strawberry ", value: "strawberry" },
    { label: "Watermelon ", value: "watermelon" },
    { label: "Pear ", value: "pear" },
    { label: "Apple ", value: "apple" },
    { label: "Tangerine ", value: "tangerine" },
    { label: "Pineapple ", value: "pineapple" },
    { label: "Peach ", value: "peach" },
  ];
  const [selected, setSelected] = useState([]);
    return (
		<div className="col-md-5" style ={{ margin: '0px -10px'}}>
			
		      <MultiSelect
		        options={options}
		        value={selected}
		        onChange={setSelected}
		        labelledBy="Select"
		      />
	        
	      </div>
)
}

// const mapStateToProps=(state) =>{
//   return {
//     brokerAreaBool : state.brokerAreaBool,
  
//   }
// }
// const mapDispatchToProps=(dispatch, props) =>{
//   return {
//     onBrokerAreaBool:() =>  {
//       dispatch(actions.brokerAreaBool())
//   }
// }
// } 
export default SectionC2;



