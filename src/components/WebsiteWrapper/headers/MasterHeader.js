import React, { Component } from 'react';
import useScrollPosition from "@react-hook/window-scroll";

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
							<div className="logo col-md-2 miclogo"> <a >
								<img id="logo_image" style={{ width: '70px', margin: '20px' }} src="./library/Logo.png" className="img-responsive retina_ready dense-image dense-ready" alt="image" /> </a>
							</div>
							<nav id="access"  style={{margin: '0px 20px 0px 100px'}}>
								<div className="menu-main-menu-container">
									<ul id="menu-main-menu" className="menu">
										<li id="menu-item-18438" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children no-megamenu   ">
										
											<a style ={{display: 'flex', justifyContent:"center", alignItems: 'center', flexDirection: 'column'}} className="menu-item-link menu-center" target="_blank" >
												<img id="logo_image" style={{ width: '40px', margin: '0px' }} src="./library/Logo.png" className="img-responsive retina_ready dense-image dense-ready" alt="image" />
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
											<img id="logo_image" style={{ width: '40px', margin: '0px' }} src="./library/Logo.png" className="img-responsive retina_ready dense-image dense-ready" alt="image" />
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
										<li id="menu-item-18344" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children no-megamenu   ">
											<a className="menu-item-link" target="_blank" style ={{display: 'flex', justifyContent:"center", alignItems: 'center', flexDirection: 'column'}}>
											<img id="logo_image" style={{ width: '40px', margin: '0px' }} src="./library/Logo.png" className="img-responsive retina_ready dense-image dense-ready" alt="image" />
											Nghỉ dưỡng</a>
											<ul style={{}} className="  sub-menu ">
												<li id="menu-item-18373" className="menu-item menu-item-type-post_type menu-item-object-page   ">
													<a className="menu-item-link" href="https://paris.wpresidence.net/agent-list-sidebar-left/">Agents List</a>
												</li>
												<li id="menu-item-18361" className="menu-item menu-item-type-post_type menu-item-object-estate_agent   ">
													<a className="menu-item-link" href="https://paris.wpresidence.net/agents/michael-suttherland/">Agent Profile</a>
												</li>
											</ul>
										</li>
										<li id="menu-item-19544" className="menu-item menu-item-type-post_type menu-item-object-page no-megamenu   ">
											<a className="menu-item-link" style ={{display: 'flex', justifyContent:"center", alignItems: 'center', flexDirection: 'column'}}>
											<img id="logo_image" style={{ width: '40px', margin: '0px' }} src="./library/Logo.png" className="img-responsive retina_ready dense-image dense-ready" alt="image" />
											Trả góp</a>
										</li>
										
										<li id="menu-item-18380" className="menu-item menu-item-type-post_type menu-item-object-page with-megamenu   ">
											<a className="menu-item-link" style ={{display: 'flex', justifyContent:"center", alignItems: 'center', flexDirection: 'column'}}>
											<img id="logo_image" style={{ width: '40px', margin: '0px' }} src="./library/Logo.png" className="img-responsive retina_ready dense-image dense-ready" alt="image" />
											Nội thất</a>
										</li>
										<li id="menu-item-18380" className="menu-item menu-item-type-post_type menu-item-object-page with-megamenu   ">
											<a className="menu-item-link" style ={{display: 'flex', justifyContent:"center", alignItems: 'center', flexDirection: 'column'}}>
											<img id="logo_image" style={{ width: '40px', margin: '0px' }} src="./library/Logo.png" className="img-responsive retina_ready dense-image dense-ready" alt="image" />
											Tin tức</a>
										</li>
										<li id="menu-item-18380" className="menu-item menu-item-type-post_type menu-item-object-page with-megamenu   ">
											<a className="menu-item-link" style ={{display: 'flex', justifyContent:"center", alignItems: 'center', flexDirection: 'column'}}>
											<img id="logo_image" style={{ width: '40px', margin: '0px' }} src="./library/Logo.png" className="img-responsive retina_ready dense-image dense-ready" alt="image" />
											Môi giới</a>
										</li>
									</ul>
								</div>
							</nav>

							<div className="header5_user_wrap">
								<div className="user_menu user_not_loged" id="user_menu_u">
									<a className="menu_user_tools dropdown" id="user_menu_trigger" data-toggle="dropdown">
									</a>
									<a className="navicon-button nav-notlog x">
										<div className="navicon">
										</div>
									</a>
									{/*<div className="submit_action">
			                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enableBackground="new 0 0 100 100" xmlSpace="preserve">
			                    <g>
			                      <path d="M50,5C25.2,5,5,25.1,5,50s20.2,45,45,45s45-20.1,45-45S74.8,5,50,5z M50,26.5c7.2,0,13.1,5.9,13.1,13.1   c0,7.2-5.9,13.1-13.1,13.1s-13.1-5.9-13.1-13.1C36.9,32.4,42.8,26.5,50,26.5z M50,87.9c-12.2,0-23.1-5.8-30.1-14.8   c5.7-10.7,17.1-18,30.1-18s24.4,7.3,30.1,18C73.2,82.1,62.2,87.9,50,87.9z">
			                      </path>
			                    </g>
			                  </svg>
			                </div>*/}
								</div>
							</div>
						</div>

					</div>
				
				<div style={scrollY>=100? {display: ''}: {display: 'none'}} className="header_wrapper header_type5 header_center hover_type_1 header_alignment_text_left navbar-fixed-top customnav" >
			      <div className="header_5_inside">
			          	<div className="header5_bottom_row">
			          	<div className="logo col-md-4 miclogo"> <a href="https://paris.wpresidence.net">
			          	<img id="logo_image" style ={{width: '65px'}} src="./library/Logo.png" className="img-responsive retina_ready dense-image dense-ready" alt="image" /> </a>
			          	</div>
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

			            <div className="header5_user_wrap">
			              <div className="user_menu user_not_loged" id="user_menu_u">
			                				<a className="menu_user_tools dropdown" id="user_menu_trigger" data-toggle="dropdown">
			                </a>
			                				<a className="navicon-button nav-notlog x">
			                  <div className="navicon">
			                  </div>
			                </a>
			                <div className="submit_action">
			                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enableBackground="new 0 0 100 100" xmlSpace="preserve">
			                    <g>
			                      <path d="M50,5C25.2,5,5,25.1,5,50s20.2,45,45,45s45-20.1,45-45S74.8,5,50,5z M50,26.5c7.2,0,13.1,5.9,13.1,13.1   c0,7.2-5.9,13.1-13.1,13.1s-13.1-5.9-13.1-13.1C36.9,32.4,42.8,26.5,50,26.5z M50,87.9c-12.2,0-23.1-5.8-30.1-14.8   c5.7-10.7,17.1-18,30.1-18s24.4,7.3,30.1,18C73.2,82.1,62.2,87.9,50,87.9z">
			                      </path>
			                    </g>
			                  </svg>
			                </div>
			              </div>
			            </div>
			          </div>
			       
			      </div>
			    </div>
			 </div>

		)
}