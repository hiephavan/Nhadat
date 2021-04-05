import React, { Component } from 'react';

class Price extends Component {
  render() {
    return (
    	<div className="col-md-6 property_price">
		            <div className="adv_search_slider">
		              <p>
		                <label htmlFor="amount">Price range:</label>
		                <span id="amount" className="wpresidence_slider_price">€ 0 to € 1,500,000</span>
		              </p>
		              <div id="slider_price" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
		                <div className="ui-slider-range ui-corner-all ui-widget-header" style={{left: '0%', width: '100%'}}>
		                </div>
		                <span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" style={{left: '0%'}}>
		                </span>
		                <span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" style={{left: '100%'}}>
		                </span>
		              </div>
		              <input type="hidden" id="price_low" name="price_low" defaultValue={0} />
		              <input type="hidden" id="price_max" name="price_max" defaultValue={1500000} />
		            </div>
		          </div>
)
}
}
export default Price;