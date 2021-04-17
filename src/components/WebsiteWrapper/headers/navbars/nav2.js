import React, { Component, useState } from 'react';
import { connect } from 'react-redux'
import  MultiSelect  from "react-multi-select-component";
import * as actions from './../../../../actions/index'
function Nav2() {

return (
		<nav id="access">
			           	<div className="menu-main-menu-container">
		           			<ul id="menu-main-menu" className="menu">
		           				<li id="menu-item-18438" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children no-megamenu   ">
			           				<a className="menu-item-link" target="_blank" href="https://demo.wpresidence.net/">Mua bán</a>
		           				<ul style={{}} className="  sub-menu ">
			           				<li id="menu-item-18439" className="menu-item menu-item-type-custom menu-item-object-custom   ">
				           				<a className="menu-item-link" target="_blank" >Cho thuê</a>
				           			</li>
			           				<li id="menu-item-18445" className="menu-item menu-item-type-custom menu-item-object-custom   ">
				           				<a className="menu-item-link" target="_blank" href="https://losangeles.wpresidence.net/">Los Angeles Demo</a>
				           			</li>
			           				<li id="menu-item-18441" className="menu-item menu-item-type-custom menu-item-object-custom   ">
				           				<a className="menu-item-link" target="_blank" href="https://demo2.wpresidence.net/">Single Agent Demo</a>
				           			</li>
			           				<li id="menu-item-18440" className="menu-item menu-item-type-custom menu-item-object-custom   ">
				           				<a className="menu-item-link" target="_blank" href="https://demo1.wpresidence.net/">WooCommerce Demo</a>
				           			</li>
			           				<li id="menu-item-18442" className="menu-item menu-item-type-custom menu-item-object-custom   ">
				           				<a className="menu-item-link" target="_blank" href="https://demo5.wpresidence.net/">WooCommerce Demo</a>
				           			</li>
			           				<li id="menu-item-18444" className="menu-item menu-item-type-custom menu-item-object-custom   ">
				           				<a className="menu-item-link" target="_blank" href="https://newyork.wpresidence.net/">New York Demo</a>
				           			</li>
			           				<li id="menu-item-18443" className="menu-item menu-item-type-custom menu-item-object-custom   ">
				           				<a className="menu-item-link" target="_blank" href="https://london.wpresidence.net/">London Demo</a>
				           			</li>
			           				<li id="menu-item-18446" className="menu-item menu-item-type-custom menu-item-object-custom   ">
				           				<a className="menu-item-link" target="_blank" href="https://demo3.wpresidence.net/">2500 Listing Demo</a>
				           			</li>
			           				<li id="menu-item-19081" className="menu-item menu-item-type-custom menu-item-object-custom   ">
				           				<a className="menu-item-link" target="_blank" href="https://demo.wpresidence.net/">Other Demos</a>
				           			</li>
		           				</ul>
				           			</li>
			           				<li id="menu-item-18345" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children no-megamenu   ">
				           				<a className="menu-item-link" href="#">Cho thuê</a>
			           			<ul style={{}} className="  sub-menu ">
			           				<li id="menu-item-18356" className="menu-item menu-item-type-post_type menu-item-object-estate_property   ">
				           				<a className="menu-item-link" href="https://paris.wpresidence.net/properties/gorgeous-farm-in-jersey/">Property Page</a>
				           			</li>
			           				<li id="menu-item-18886" className="menu-item menu-item-type-post_type menu-item-object-page   ">
				           				<a className="menu-item-link" href="https://paris.wpresidence.net/properties-list-just-featured-2/">Properties List Half Map</a>
				           			</li>
			           				<li id="menu-item-18381" className="menu-item menu-item-type-post_type menu-item-object-page   ">
				           				<a className="menu-item-link" href="https://paris.wpresidence.net/properties-list-sidebar-left-2/">Properties List Standard</a>
				           			</li>
			           				<li id="menu-item-18488" className="menu-item menu-item-type-taxonomy menu-item-object-property_category   ">
				           				<a className="menu-item-link" href="https://paris.wpresidence.net/listings/apartments/">List by Type</a>
				           			</li>
			           				<li id="menu-item-18352" className="menu-item menu-item-type-taxonomy menu-item-object-property_area   ">
				           				<a className="menu-item-link" href="https://paris.wpresidence.net/area/le-touquet/">List by Area</a>
				           			</li>
			           			</ul>
				           			</li>
			           				<li id="menu-item-18344" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children no-megamenu   ">
				           				<a className="menu-item-link" target="_blank" href="#">Nghỉ dưỡng</a>
			           			<ul style={{}} className="  sub-menu ">
			           				<li id="menu-item-18373" className="menu-item menu-item-type-post_type menu-item-object-page   ">
				           				<a className="menu-item-link" href="https://paris.wpresidence.net/agent-list-sidebar-left/">Agents List</a>
				           			</li>
			           				<li id="menu-item-18361" className="menu-item menu-item-type-post_type menu-item-object-estate_agent   ">
				           				<a className="menu-item-link" href="https://paris.wpresidence.net/agents/michael-suttherland/">Agent Profile</a>
				           			</li>
			           			</ul>
				           			</li>
			           				
			           				
				           			<li id="menu-item-18380" className="menu-item menu-item-type-post_type menu-item-object-page with-megamenu   ">
				           				<a className="menu-item-link" href="https://paris.wpresidence.net/contact-us-3/">Nội thất</a>
				           			</li>
				           			<li id="menu-item-18380" className="menu-item menu-item-type-post_type menu-item-object-page with-megamenu   ">
				           				<a className="menu-item-link" href="https://paris.wpresidence.net/contact-us-3/">Tin tức</a>
				           			</li>
				           			<li id="menu-item-18380" className="menu-item menu-item-type-post_type menu-item-object-page with-megamenu   ">
				           				<a className="menu-item-link" href="https://paris.wpresidence.net/contact-us-3/">Môi giới</a>
				           			</li>
			           			</ul>
			           </div>
			         </nav>
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
export default connect(mapStateToProps,mapDispatchToProps)(Nav2);


