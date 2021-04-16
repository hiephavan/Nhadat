import React, { Component } from 'react';
import useScrollPosition from "@react-hook/window-scroll";
import Log from './navbars/log'
export default function MasterHeader() {
 	const scrollY = useScrollPosition(60 /*frames per second*/);
  
		return (

			<div  className="master_header wide topbar_transparent">
				<div className="mobile_header">
					<div className="mobile-trigger">
						<i className="fas fa-bars">
						</i>
					</div>
					<div className="mobile-logo">
						<a >
							<img src="./library/Realestate.jpg" className="img-responsive retina_ready dense-image dense-ready" alt="image" />
						</a>
					</div>
					<div className="mobile-trigger-user">
						<i className="fas fa-user-circle">
						</i>
					</div>
				</div>

				<div style={scrollY>=100? {display: 'none'}: {}} className="header_wrapper header_type5_1 header_center hover_type_1 header_alignment_text_left navbar-fixed-top customnav_1">
					<div className="header_5_inside">
						<div className="header5_bottom_row"></div>
						
						<div className="col-md-2 "> <a >
								<img  style={{ height: '45px', margin: '25px 30px 20px 45px' }} src="./library/logo.png" className="img-responsive retina_ready dense-image dense-ready" alt="image" /> </a>
							</div>
						 <div className="col-md-10 header_5_widget_wrap" style ={{display: 'flex', justifyContent:"center", alignItems: 'center'}} >
							<nav id="access"  style={{margin: '0px 20px 0px 00px'}}>
								<div >
									<ul style={{width: '860px', marginRight: '100px'}} >
										<li id="menu-item-18438" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children no-megamenu   ">
										
											<a style ={{display: 'flex', justifyContent:"center", alignItems: 'center', flexDirection: 'column', fontWeight: '500'}} className="menu-item-link menu-center" target="_blank" >
												<img id="logo_image" style={{ width: '35px', margin: '10px' }} src="./library/muaban.png" className="img-responsive retina_ready dense-image dense-ready" alt="image" />
											 Mua bán</a>
											<ul style={{}} className="  sub-menu ">
												<li id="menu-item-18439" className="menu-item menu-item-type-custom menu-item-object-custom   ">
													<a className="menu-item-link" target="_blank" >

													Cho thuê</a>
												</li>
												<li id="menu-item-18445" className="menu-item menu-item-type-custom menu-item-object-custom   ">
													<a className="menu-item-link" target="_blank" >Los Angeles Demo</a>
												</li>
												<li id="menu-item-18441" className="menu-item menu-item-type-custom menu-item-object-custom   ">
													<a className="menu-item-link" target="_blank" >Single Agent Demo</a>
												</li>
												<li id="menu-item-18440" className="menu-item menu-item-type-custom menu-item-object-custom   ">
													<a className="menu-item-link" target="_blank" >WooCommerce Demo</a>
												</li>
												<li id="menu-item-18442" className="menu-item menu-item-type-custom menu-item-object-custom   ">
													<a className="menu-item-link" target="_blank" >WooCommerce Demo</a>
												</li>
												<li id="menu-item-18444" className="menu-item menu-item-type-custom menu-item-object-custom   ">
													<a className="menu-item-link" target="_blank" >New York Demo</a>
												</li>
												<li id="menu-item-18443" className="menu-item menu-item-type-custom menu-item-object-custom   ">
													<a className="menu-item-link" target="_blank" >London Demo</a>
												</li>
												<li id="menu-item-18446" className="menu-item menu-item-type-custom menu-item-object-custom   ">
													<a className="menu-item-link" target="_blank" >2500 Listing Demo</a>
												</li>
												<li id="menu-item-19081" className="menu-item menu-item-type-custom menu-item-object-custom   ">
													<a className="menu-item-link" target="_blank" >Other Demos</a>
												</li>
											</ul>
										</li>
										<li id="menu-item-18345" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children no-megamenu   ">
											<a className="menu-item-link" style ={{display: 'flex', justifyContent:"center", alignItems: 'center', flexDirection: 'column',fontWeight: '500'}}>
											<img id="logo_image" style={{ width: '35px', margin: '10px' }} src="./library/chothue.png" className="img-responsive retina_ready dense-image dense-ready" alt="image" />
											Cho thuê</a>
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
									
										<li id="menu-item-18380" className="menu-item menu-item-type-post_type menu-item-object-page with-megamenu   ">
											<a className="menu-item-link" style ={{display: 'flex', justifyContent:"center", alignItems: 'center', flexDirection: 'column',fontWeight: '500'}}>
											<img id="logo_image" style={{ width: '35px', margin: '10px' }} src="./library/moigioi.png" className="img-responsive retina_ready dense-image dense-ready" alt="image" />
											Môi giới</a>
										</li>
										<li id="menu-item-18380" className="menu-item menu-item-type-post_type menu-item-object-page with-megamenu   ">
											<a className="menu-item-link" style ={{display: 'flex', justifyContent:"center", alignItems: 'center', flexDirection: 'column',fontWeight: '500'}}>
											<img id="logo_image" style={{ width: '35px', margin: '10px' }} src="./library/noithat.png" className="img-responsive retina_ready dense-image dense-ready" alt="image" />
											Nội thất</a>
										</li>
										<li id="menu-item-18380" className="menu-item menu-item-type-post_type menu-item-object-page with-megamenu   ">
											<a className="menu-item-link" style ={{display: 'flex', justifyContent:"center", alignItems: 'center', flexDirection: 'column',fontWeight: '500'}}>
											<img id="logo_image" style={{ width: '35px', margin: '10px' }} src="./library/tintuc.png" className="img-responsive retina_ready dense-image dense-ready" alt="image" />
											Tin tức</a>
										</li>
										<li id="menu-item-18380" className="menu-item menu-item-type-post_type menu-item-object-page with-megamenu   ">
										<a className="menu-item-link" style ={{display: 'flex', justifyContent:"center", alignItems: 'center', flexDirection: 'column',fontWeight: '500',paddingRight: '0px',paddingLeft: '50px'}}>
											<img id="logo_image" style={{ width: '35px', margin: '10px', fontSize: '14px' }} src="./library/dangtin.png" className="img-responsive retina_ready dense-image dense-ready" alt="image" />
													Đăng tin
										</a>
										</li>
										<li id="menu-item-18380" className="menu-item menu-item-type-post_type menu-item-object-page with-megamenu   ">
										 <a className="menu-item-link" style ={{display: 'flex', justifyContent:"center", alignItems: 'center', flexDirection: 'column',fontWeight: '500',paddingLeft: '15px',paddingRight: '0px'}}>
											<img id="logo_image" style={{ width: '35px', margin: '10px', fontSize: '14px',  }} src="./library/dangnhap1.png" className="img-responsive retina_ready dense-image dense-ready" alt="image" />
													Đăng nhập | đăng ký
										</a>
										</li>
									</ul>

								</div>

							</nav>
							</div>
							{/*<div className="col-md-2 header_5_widget_wrap" >
							<div className="header5_user_wrap" style ={{display: 'flex', justifyContent:"center", alignItems: 'center', flexDirection: 'row',fontWeight: '500'}}>

					          	<a className="menu-item-link" style ={{display: 'flex', justifyContent:"center", alignItems: 'center', flexDirection: 'column',fontWeight: '500', margin: '10px 10px 20px 10px'}}>
									<img id="logo_image" style={{ width: '35px', margin: '10px' }} src="./library/dangtin.png" className="img-responsive retina_ready dense-image dense-ready" alt="image" />
											Đăng tin
								</a>
					             
					      
						         <a className="menu-item-link" style ={{display: 'flex', justifyContent:"center", alignItems: 'center', flexDirection: 'column',margin: '10px 10px 20px 10px'}}>
										<img id="logo_image" style={{ width: '35px', margin: '10px' }} src="./library/dangnhap1.png" className="img-responsive retina_ready dense-image dense-ready" alt="image" />
												Đăng nhập | đăng ký
								</a>
					        </div>
					       </div>*/}
						</div>

					</div>
				
				<div style={scrollY>=100? {display: ''}: {display: 'none'}} className="header_wrapper header_type5 header_center hover_type_1 header_alignment_text_left navbar-fixed-top customnav" >
			      <div className="header_5_inside">
			          	<div className="header5_bottom_row">
			          	<div className="logo col-md-4 miclogo"> <a href="https://paris.wpresidence.net">
			          	<img id="logo_image" style ={{heigth: '65px'}} src="./library/logo.png" className="img-responsive retina_ready dense-image dense-ready" alt="image" /> </a>
			          	</div>
			          	<nav id="access"  style={{margin: '0px 20px 0px 320px'}}>
								<div className="menu-main-menu-container">
									<ul style ={{margin: '0px 0px 0px 35px'}} id="menu-main-menu" className="menu">
										<li id="menu-item-18438" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children no-megamenu   ">
										
											<a  className="menu-item-link menu-center" target="_blank" >
												
											 Mua bán</a>
											<ul style={{}} className="  sub-menu ">
												<li id="menu-item-18439" className="menu-item menu-item-type-custom menu-item-object-custom   ">
													<a className="menu-item-link" target="_blank" >

													Cho thuê</a>
												</li>
												<li id="menu-item-18445" className="menu-item menu-item-type-custom menu-item-object-custom   ">
													<a className="menu-item-link" target="_blank" >Los Angeles Demo</a>
												</li>
												<li id="menu-item-18441" className="menu-item menu-item-type-custom menu-item-object-custom   ">
													<a className="menu-item-link" target="_blank" >Single Agent Demo</a>
												</li>
												<li id="menu-item-18440" className="menu-item menu-item-type-custom menu-item-object-custom   ">
													<a className="menu-item-link" target="_blank" >WooCommerce Demo</a>
												</li>
												<li id="menu-item-18442" className="menu-item menu-item-type-custom menu-item-object-custom   ">
													<a className="menu-item-link" target="_blank" >WooCommerce Demo</a>
												</li>
												<li id="menu-item-18444" className="menu-item menu-item-type-custom menu-item-object-custom   ">
													<a className="menu-item-link" target="_blank" >New York Demo</a>
												</li>
												<li id="menu-item-18443" className="menu-item menu-item-type-custom menu-item-object-custom   ">
													<a className="menu-item-link" target="_blank" >London Demo</a>
												</li>
												<li id="menu-item-18446" className="menu-item menu-item-type-custom menu-item-object-custom   ">
													<a className="menu-item-link" target="_blank" >2500 Listing Demo</a>
												</li>
												<li id="menu-item-19081" className="menu-item menu-item-type-custom menu-item-object-custom   ">
													<a className="menu-item-link" target="_blank" >Other Demos</a>
												</li>
											</ul>
										</li>
										<li id="menu-item-18345" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children no-megamenu   ">
											<a className="menu-item-link" style ={{display: 'flex', justifyContent:"center", alignItems: 'center', flexDirection: 'column'}}>
											Cho thuê</a>
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
									
										
										<li id="menu-item-18380" className="menu-item menu-item-type-post_type menu-item-object-page with-megamenu   ">
											<a className="menu-item-link" style ={{display: 'flex', justifyContent:"center", alignItems: 'center', flexDirection: 'column',fontWeight: '500'}}>
										
											Nội thất</a>
										</li>
										<li id="menu-item-18380" className="menu-item menu-item-type-post_type menu-item-object-page with-megamenu   ">
											<a className="menu-item-link" style ={{display: 'flex', justifyContent:"center", alignItems: 'center', flexDirection: 'column',fontWeight: '500'}}>
										
											Tin tức</a>
										</li>
										<li id="menu-item-18380" className="menu-item menu-item-type-post_type menu-item-object-page with-megamenu   ">
											<a className="menu-item-link" style ={{display: 'flex', justifyContent:"center", alignItems: 'center', flexDirection: 'column',fontWeight: '500'}}>
										
											Môi giới</a>
										</li>
										<li id="menu-item-18380" className="menu-item menu-item-type-post_type menu-item-object-page with-megamenu   ">
											<a className="menu-item-link" style ={{marginLeft: '100px' ,display: 'flex', justifyContent:"center", alignItems: 'center', flexDirection: 'column'}}>
										
											Đăng tin</a>
										</li>
									</ul>
								</div>
							</nav>

			           <div className="header5_user_wrap">

				          <div className="user_menu user_not_loged" id="user_menu_u" style={{margin: '20px 50px 10px 50px'}}> 

				          	<a className="menu-item-link " style ={{display: 'flex', justifyContent:"center", alignItems: 'center', flexDirection: 'column'}}>
								<i style={{ width: '35px', marginTop: '9px', color: '#ddb327' }} className="fas fa-user-circle fa-lg"></i>

						</a>
             
          </div>
        </div>
			          </div>
			       
			      </div>
			    </div>
			 </div>

		)
}