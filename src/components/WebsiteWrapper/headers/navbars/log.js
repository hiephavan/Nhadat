import React, { Component, useState } from 'react';
import { connect } from 'react-redux'
import  MultiSelect  from "react-multi-select-component";
import * as actions from './../../../../actions/index'
function Log() {

return (
		<div className="header5_user_wrap">

          <div className="user_menu user_not_loged" id="user_menu_u" style={{margin: '15px 200px 20px 50px'}}> 

          	<a className="menu-item-link" style ={{display: 'flex', justifyContent:"center", alignItems: 'center', flexDirection: 'column',fontWeight: '500'}}>
											<img id="logo_image" style={{ width: '40px', margin: '10px' }} src="./library/dangky.png" className="img-responsive retina_ready dense-image dense-ready" alt="image" />
											Đăng ký</a>
             
          </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(Log);


