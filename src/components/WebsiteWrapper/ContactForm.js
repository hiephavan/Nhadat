import React, { Component } from 'react';


class ContactForm extends Component {
  render() {
    return (
	   <div className="contactformwrapper hidden">
	      <div id="footer-contact-form">
	        <div className="contact_close_button">
	          <i className="fas fa-times" aria-hidden="true">
	          </i>
	        </div>
	        <h4>Contact Us</h4>
	        <p>Use the form below to contact us!</p>
	        <div className="alert-box error">
	          <div className="alert-message" id="footer_alert-agent-contact">
	          </div>
	        </div>
	        <input type="text" placeholder="Your Name" required="required" id="foot_contact_name" name="contact_name" className="form-control" defaultValue tabIndex={373} />
	        <input type="email" required="required" placeholder="Your Email" id="foot_contact_email" name="contact_email" className="form-control" defaultValue tabIndex={374} />
	        <input type="email" required="required" placeholder="Your Phone" id="foot_contact_phone" name="contact_phone" className="form-control" defaultValue tabIndex={374} />
	        <textarea placeholder="Type your message..." required="required" id="foot_contact_content" name="contact_content" className="form-control" tabIndex={375} defaultValue={"                "} />
	        <input type="hidden" name="contact_footer_ajax_nonce" id="contact_footer_ajax_nonce" defaultValue="570ab5cb82" />
	        <div className="gpr_wrapper">
	          <input type="checkbox" id="wpestate_agree_gdprfooter" className="wpestate_agree_gdpr" name="wpestate_agree_gdpr" />
	          <label htmlFor="wpestate_agree_gdpr">I consent to the <a target="_blank" href="https://paris.wpresidence.net/gdpr-terms-and-conditions/">GDPR Terms</a>
	          </label>
	        </div>
	        <div className="btn-cont">
	          <button type="submit" id="btn-cont-submit" className="wpresidence_button">Send</button>
	          <input type="hidden" defaultValue name="contact_to" />
	          <div className="bottom-arrow">
	          </div>
	        </div>
	      </div>
	    </div>
)
}
}
export default ContactForm;