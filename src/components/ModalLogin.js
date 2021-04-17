import React, { Component } from 'react';


class ModalLogin extends Component {
  render() {
    return (
		<div id="modal_login_wrapper">
		    <div className="modal_login_back">
		    </div>
		    <div className="modal_login_container " style={{height: '550px'}}>
		      <div id="login-modal_close">
		      </div>
		      <div className="login-register-modal-image" style={{backgroundImage: 'url("https://pariswpresidence.b-cdn.net/wp-content/uploads/2021/02/couple-e1614337965174.jpg")'}}>
		        <div className="featured_gradient">
		        </div>
		        <div className="login-register-modal-image_text">Welcome to Your Real Estate Website</div>
		      </div>
		      <div className="login-register-modal-form-wrapper">
		        <div className="login_form" id="login-div_topbar">
		          <div id="login-div-title-topbar">Sign into your account</div>
		          <div className="loginalert" id="login_message_area_topbar">
		          </div>
		          <input type="text" className="form-control" name="log" id="login_user_topbar" placeholder="Username" />
		          <input type="password" className="form-control" name="pwd" id="login_pwd_topbar" placeholder="Password" />
		          <input type="hidden" name="loginpop" id="loginpop_wd_topbar" defaultValue={0} />
		          <input type="hidden" id="security-login-topbar" name="security-login-topbar" defaultValue="c10854891a-1616551554" />
		          <button className="wpresidence_button" id="wp-login-but-topbar">Login</button>
		          <div className="login-links">
		            <div className="or_social">or</div>
		            <div className="wpestate_social_login" id="facebookloginsidebar_topbar" data-social="facebook"> Login with Facebook</div>
		            <div className="wpestate_social_login" id="googleloginsidebar_topbar" data-social="google">Login with Google</div>
		            <input type="hidden" className="wpestate_social_login_nonce" defaultValue="34ddd86d73" />
		          </div>
		        </div>
		        <div className="login_form" id="register-div-topbar">
		          <div id="register-div-title-topbar">Create an account</div>
		          <div className="loginalert" id="register_message_area_topbar">
		          </div>
		          <input type="text" name="user_login_register" id="user_login_register_topbar" className="form-control" placeholder="Username" />
		          <input type="text" name="user_email_register" id="user_email_register_topbar" className="form-control" placeholder="Email" />
		          <input type="password" name="user_password" id="user_password_topbar" className="form-control" placeholder="Password" />
		          <input type="password" name="user_password_retype" id="user_password_topbar_retype" className="form-control" placeholder="Retype Password" />
		          <select id="new_user_type_topbar" name="new_user_type_topbar" className="form-control">
		            <option value={0}>Select User Type</option>
		            <option value={1}>User</option>
		            <option value={2}>Single Agent</option>
		            <option value={3}>Agency</option>
		            <option value={4}>Developer</option>
		          </select>
		          <input type="checkbox" name="terms" id="user_terms_register_topbar" />
		          <label id="user_terms_register_topbar_label" htmlFor="user_terms_register_topbar">I agree with <a href="https://paris.wpresidence.net/terms-of-user/" target="_blank" id="user_terms_register_topbar_link">terms &amp; conditions</a>
		          </label>
		          <input type="hidden" id="security-register-topbar" name="security-register-topbar" defaultValue="8ec47c6cce-1616551554" />
		          <button className="wpresidence_button" id="wp-submit-register_topbar">Register</button>
		        </div>
		        <div className="login_form" id="forgot-pass-div">
		          <div id="forgot-div-title-topbar">Reset Password</div>
		          <div className="loginalert" id="forgot_pass_area_topbar">
		          </div>
		          <div className="loginrow">
		            <input type="text" className="form-control" name="forgot_email" id="forgot_email_topbar" placeholder="Enter Your Email Address" size={20} />
		          </div>
		          <input type="hidden" id="security-forgot-topbar" name="security-forgot-topbar" defaultValue="17e1fd39bb" />
		          <input type="hidden" name="_wp_http_referer" defaultValue="/" />
		          <input type="hidden" id="postid" defaultValue={19518} />
		          <button className="wpresidence_button" id="wp-forgot-but-topbar" name="forgot">Reset Password</button>
		        </div>
		        <div className="login_modal_control">
		          <a href="https://paris.wpresidence.net/#" id="widget_register_topbar">Register here!</a>
		          <a href="https://paris.wpresidence.net/#" id="forgot_pass_topbar">Forgot password?</a>
		          <a href="https://paris.wpresidence.net/#" id="widget_login_topbar">Back to login</a>
		          <a href="https://paris.wpresidence.net/#" id="return_login_topbar">Back to login</a>
		          <input type="hidden" name="loginpop" id="loginpop" defaultValue={0} />
		        </div>
		      </div>
		    </div>
		  </div>
)
}
}
export default ModalLogin;