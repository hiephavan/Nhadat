import React, { Component, useState } from 'react';
import { connect } from 'react-redux'
import  MultiSelect  from "react-multi-select-component";
import * as actions from './../../../../actions/index'

function SectionC1() {
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
		<div className="col-md-5" style ={{ margin: '0px 0px 0px 10px', padding: '0px'}}>
		    <MultiSelect
		        options={options}
		        value={selected}
		        onChange={setSelected}
		        labelledBy="Select"
		      />
		  </div>
)
}

const mapStateToProps=(state) =>{
  return {
    brokerBool : state.brokerBool,
  
  }
}
const mapDispatchToProps=(dispatch, props) =>{
  return {
    onBrokerBool:() =>  {
      dispatch(actions.brokerBool())
  }
}
} 
export default connect(mapStateToProps,mapDispatchToProps)(SectionC1);



