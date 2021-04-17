import React, { Component } from 'react';


class MobileWrapperUser extends Component {
  render() {
    return (
		<div className="mobilewrapper-user" style={{display: 'none'}}>
		    <div className="snap-drawers">
		      <div className="snap-drawer snap-drawer-right">
		        <div className="mobilemenu-close-user">
		          <i className="fas fa-times">
		          </i>
		        </div>
		        <div className="login_sidebar">
		          <h3 id="login-div-title-mobile">Login</h3>
		          <div className="login_form" id="login-div_mobile">
		            <div className="loginalert" id="login_message_area_mobile">
		            </div>
		            <input type="text" className="form-control" name="log" id="login_user_mobile" placeholder="Username" />
		            <input type="password" className="form-control" name="pwd" id="login_pwd_mobile" placeholder="Password" />
		            <input type="hidden" name="loginpop" id="loginpop_wd_mobile" defaultValue={0} />
		            <input type="hidden" id="security-login-mobile" name="security-login-mobile" defaultValue="2b6d12138d-1616551553" />
		            <button className="wpresidence_button" id="wp-login-but-mobile">Login</button>
		            <div className="login-links">
		              <a href="https://paris.wpresidence.net/#" id="widget_register_mobile">Need an account? Register here!</a>
		              <a href="https://paris.wpresidence.net/#" id="forgot_pass_mobile">Forgot Password?</a>
		              <div className="wpestate_social_login" id="facebookloginsidebar_mobile" data-social="facebook"> Login with Facebook</div>
		              <div className="wpestate_social_login" id="googleloginsidebar_mobile" data-social="google">Login with Google</div>
		              <input type="hidden" className="wpestate_social_login_nonce" defaultValue="34ddd86d73" />
		            </div>
		          </div>
		          <h3 id="register-div-title-mobile">Register</h3>
		          <div className="login_form" id="register-div-mobile">
		            <div className="loginalert" id="register_message_area_mobile">
		            </div>
		            <input type="text" name="user_login_register" id="user_login_register_mobile" className="form-control" placeholder="Username" />
		            <input type="text" name="user_email_register" id="user_email_register_mobile" className="form-control" placeholder="Email" />
		            <input type="password" name="user_password" id="user_password_mobile" className="form-control" placeholder="Password" />
		            <input type="password" name="user_password_retype" id="user_password_mobile_retype" className="form-control" placeholder="Retype Password" />
		            <select id="new_user_type_mobile" name="new_user_type_mobile" className="form-control">
		              <option value={0}>Select User Type</option>
		              <option value={1}>User</option>
		              <option value={2}>Single Agent</option>
		              <option value={3}>Agency</option>
		              <option value={4}>Developer</option>
		            </select>
		            <input type="checkbox" name="terms" id="user_terms_register_mobile" />
		            <label id="user_terms_register_mobile_label" htmlFor="user_terms_register_mobile">I agree with <a href="https://paris.wpresidence.net/terms-of-user/" target="_blank" id="user_terms_register_mobile_link">terms &amp; conditions</a>
		            </label>
		            <input type="hidden" id="security-register-mobile" name="security-register-mobile" defaultValue="24090147f0-1616551553" />
		            <button className="wpresidence_button" id="wp-submit-register_mobile">Register</button>
		            <div className="login-links">
		              <a href="https://paris.wpresidence.net/#" id="widget_login_mobile">Back to Login</a>
		            </div>
		          </div>
		          <h3 id="forgot-div-title-mobile">Reset Password</h3>
		          <div className="login_form" id="forgot-pass-div-mobile">
		            <div className="loginalert" id="forgot_pass_area_mobile">
		            </div>
		            <div className="loginrow">
		              <input type="text" className="form-control" name="forgot_email" id="forgot_email_mobile" placeholder="Enter Your Email Address" size={20} />
		            </div>
		            <input type="hidden" id="security-forgot-mobile" name="security-forgot-mobile" defaultValue="23595ed896" />
		            <input type="hidden" name="_wp_http_referer" defaultValue="/" />
		            <input type="hidden" id="postid-mobile" defaultValue />
		            <button className="wpresidence_button" id="wp-forgot-but-mobile" name="forgot">Reset Password</button>
		            <div className="login-links shortlog">
		              <a href="https://paris.wpresidence.net/#" id="return_login_mobile">Return to Login</a>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		</div>
)
}
}
export default MobileWrapperUser;