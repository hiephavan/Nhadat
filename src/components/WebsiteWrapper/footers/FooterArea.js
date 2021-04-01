import React, { Component } from 'react';
// import  from './footers/SubFooter'
import First from './footer_areas/First'
import Second from './footer_areas/Second'
import Third from './footer_areas/Third'
import Fourth from './footer_areas/Fourth'

class FooterArea extends Component {
  render() {
    return (
    	<div id="footer-widget-area" className="row ">
	        <First />
	        <Second />
	        <Third />
	        <Fourth />
	    </div>
)
}
}
export default FooterArea;