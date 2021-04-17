import React, { Component } from 'react';
import Sec1 from './menufooters/Sec1'
import Sec2 from './menufooters/Sec2'
import Sec3 from './menufooters/Sec3'
import Sec4 from './menufooters/Sec4'
class MenuFooter extends Component {
  render() {
	return (
		<div style ={{backgroundColor:'rgba(225, 225, 225, 0.5'}} id="footer-widget-area" className="row ">
		     <Sec1 />
			<Sec2 />
			<Sec3 />
			<Sec4 />
	    </div>
)
}
}
export default MenuFooter;
// style ={{backgroundColor:'rgba(225, 225, 225, 0.5'}}