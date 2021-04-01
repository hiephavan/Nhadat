import React, { Component } from 'react';
import SubFooter from './footers/SubFooter'
import FooterArea from './footers/FooterArea'


class Footer extends Component {
  render() {
    return (
		<footer style ={{backgroundColor:'#DDB327'}} id="colophon" className="footer_back_repeat_no">
				
			    <FooterArea />
			    <SubFooter />
		</footer>
)
}
}
export default Footer;
// style ={{backgroundColor:'#DDB327'}}