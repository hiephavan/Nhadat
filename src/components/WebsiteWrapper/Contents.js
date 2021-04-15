import React, { Component } from 'react';
import SectionA from './contents/SectionA'
import SectionB from './contents/SectionB'
import SectionC from './contents/SectionC'
import SectionD from './contents/SectionD'
import SectionE from './contents/SectionE'
import SectionF from './contents/SectionF'

class Contents extends Component {
  render() {
    return (
		<div className="container content_wrapper">
	        <div className="row">
	          <div className="col-xs-12 col-md-12 breadcrumb_container">
	            <div style={{height: '30px'}}>
	            </div>
	          </div>
	          <div className="col-xs-12 col-md-12 single_width_page">
	            <span className="entry-title listing_loader_title">Your search results</span>
	            <div className="spinner" id="listing_loader">
	              <div className="rect1">
	              </div>
	              <div className="rect2">
	              </div>
	              <div className="rect3">
	              </div>
	              <div className="rect4">
	              </div>
	              <div className="rect5">
	              </div>
	            </div>
	            <div id="listing_ajax_container">
	            </div>
	            <div className="single-content">
	              <div data-elementor-type="wp-page" data-elementor-id={19518} className="elementor elementor-19518" data-elementor-settings="[]">
	                <div className="elementor-inner">
	                  <div className="elementor-section-wrap">
	                    <SectionA />
	                    <SectionB />
	                   
	                    <SectionD />
	                    <SectionC />
	                    <SectionF />
	                  </div>
	                </div>
	              </div>
	            </div>
	          </div>
	          <div className="clearfix visible-xs">
	          </div>
	        </div>
	    </div>
)
}
}
export default Contents;