import React, { Component } from 'react';
import Footer from './WebsiteWrapper/Footer';
import MenuFooter from './WebsiteWrapper/MenuFooter';
import Header from './WebsiteWrapper/Header';
import Contents from './WebsiteWrapper/Contents'
import ContactForm from './WebsiteWrapper/ContactForm'
class WebsiteWrapper extends Component {
  render() {
    return (
		<div className="website-wrapper" id="all_wrapper">
		    <div className="container main_wrapper  wide  has_header_type5   topbar_transparent   contentheader_center  cheader_center ">
		     <Header />
		     <Contents />
		    </div>
		    <MenuFooter />
		   	<Footer />
		    <input type="hidden" id="wpestate_ajax_log_reg" defaultValue="19fdf550e2" />
		    <a href="https://paris.wpresidence.net/#" className="backtop">
		      <i className="fas fa-chevron-up">
		      </i>
		    </a>
		    <a href="https://paris.wpresidence.net/#" className="contact-box">
		      <i className="fas fa-envelope">
		      </i>
		    </a>
		   <ContactForm />
		 </div>	
)
}
}
export default WebsiteWrapper;