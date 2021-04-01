import React, { Component } from 'react';


class Search extends Component {
  render() {
    return (
    	<div className="search_wrapper search_wr_10     with_search_on_start  without_search_form_float " id="search_wrapper" data-postid={19518} style={{marginTop: '60px'}}>
		    <div id="search_wrapper_color">
		    </div>
		    <div className="adv-search-1  adv_extended_class" id="adv-search-1">
		      <form style ={{marginTop: '15px'}} role="search" method="get" action="https://paris.wpresidence.net/advanced-search-2/">
		        <div className="col-md-8" >
		          <input type="text" id="adv_location" className="form-control" name="adv_location" placeholder="Địa chỉ, trạng thái, thành phố hay khu vực"  />
		        </div>
		        <div className="col-md-2">
		          <div className="dropdown form-control ">
		            <div data-toggle="dropdown" id="adv_actions" className="filter_menu_trigger" data-value="all"> Loại hình <span className="caret caret_filter">
		              </span>
		            </div>
		            <input type="hidden" name="filter_search_action[]" defaultValue />
		            <ul className="dropdown-menu filter_menu" role="menu" aria-labelledby="adv_actions">
		              <li role="presentation" data-value="all">Loại hình</li>
		              <li role="presentation" data-value="rentals">Cho thuê</li>
		              <li role="presentation" data-value="sales">Bán</li>
		            </ul>
		          </div>
		        </div>
		        <div className="col-md-2">
		          <div className="adv_handler">
		            <i className="fas fa-sliders-h" aria-hidden="true">
		            </i>
		          </div>
		          <input name="submit" type="submit" className="wpresidence_button" id="advanced_submit_10" value="Tìm kiếm" />
		        </div>
		        <input type="hidden" name="is10" defaultValue={10} />
		        <div className="adv_search_hidden_fields ">
		          <div className="col-md-3 categories">
		            <div className="dropdown form-control ">
		              <div data-toggle="dropdown" id="adv_categ" className=" filter_menu_trigger  " xx all categories data-value="all">Categories <span className="caret  caret_filter ">
		                </span>
		              </div>
		              <input type="hidden" name="filter_search_type[]" defaultValue />
		              <ul id="categlist" className="dropdown-menu filter_menu" role="menu" aria-labelledby="adv_categ">
		                <li role="presentation" data-value="all">Categories</li>
		                <li role="presentation" data-value="apartments">Apartments</li>
		                <li role="presentation" data-value="condos">Condos</li>
		                <li role="presentation" data-value="houses">Houses</li>
		                <li role="presentation" data-value="industrial">Industrial</li>
		                <li role="presentation" data-value="land">Land</li>
		                <li role="presentation" data-value="offices">Offices</li>
		                <li role="presentation" data-value="retail">Retail</li>
		                <li role="presentation" data-value="villas">Villas</li>
		              </ul>
		            </div>
		          </div>
		          <div className="col-md-3 property_bedrooms">
		            <div className="dropdown form-control ">
		              <div data-toggle="dropdown" id="bedrooms" className=" filter_menu_trigger  " xx all bedrooms data-value="all">Bedrooms <span className="caret  caret_filter ">
		                </span>
		              </div>
		              <input type="hidden" name="bedrooms" defaultValue />
		              <ul id="search-bedrooms" className="dropdown-menu filter_menu" role="menu" aria-labelledby="bedrooms">
		                <li role="presentation" data-value="all">Bedrooms</li>
		                <li data-value={1} value={1}>1</li>
		                <li data-value={2} value={2}>2</li>
		                <li data-value={3} value={3}>3</li>
		                <li data-value={4} value={4}>4</li>
		                <li data-value={5} value={5}>5</li>
		                <li data-value={6} value={6}>6</li>
		                <li data-value={7} value={7}>7</li>
		                <li data-value={8} value={8}>8</li>
		                <li data-value={9} value={9}>9</li>
		                <li data-value={10} value={10}>10</li>
		              </ul>
		            </div>
		          </div>
		          <div className="col-md-3 property_bathrooms">
		            <div className="dropdown form-control ">
		              <div data-toggle="dropdown" id="min-baths" className=" filter_menu_trigger  " xx all min baths data-value="all">Min Baths <span className="caret  caret_filter ">
		                </span>
		              </div>
		              <input type="hidden" name="min-baths" defaultValue />
		              <ul id="search-min-baths" className="dropdown-menu filter_menu" role="menu" aria-labelledby="min-baths">
		                <li role="presentation" data-value="all">Min Baths</li>
		                <li data-value={1} value={1}>1</li>
		                <li data-value={2} value={2}>2</li>
		                <li data-value={3} value={3}>3</li>
		                <li data-value={4} value={4}>4</li>
		                <li data-value={5} value={5}>5</li>
		                <li data-value={6} value={6}>6</li>
		                <li data-value={7} value={7}>7</li>
		                <li data-value={8} value={8}>8</li>
		                <li data-value={9} value={9}>9</li>
		                <li data-value={10} value={10}>10</li>
		              </ul>
		            </div>
		          </div>
		          <div className="col-md-3 stories-number">
		            <div className="dropdown form-control ">
		              <div data-toggle="dropdown" id="stories-number" className=" filter_menu_trigger  " xx all stories number data-value="all">Stories Number <span className="caret  caret_filter ">
		                </span>
		              </div>
		              <input type="hidden" name="stories-number" defaultValue />
		              <ul id="stories-number" className="dropdown-menu filter_menu" role="menu" aria-labelledby="stories-number">
		                <li role="presentation" data-value="all">Stories Number</li>
		                <li role="presentation" data-value={1}>1</li>
		                <li role="presentation" data-value={2}>2</li>
		                <li role="presentation" data-value={3}>3</li>
		                <li role="presentation" data-value={4}>4</li>
		                <li role="presentation" data-value={5}>5</li>
		                <li role="presentation" data-value={6}>6</li>
		              </ul>
		            </div>
		          </div>
		          <div className="col-md-3 property_size">
		            <input type="text" id="min-size" name="min-size" placeholder="Min. Size" defaultValue className="advanced_select form-control" />
		          </div>
		          <div className="col-md-3 property-date">
		            <input type="text" id="year-built" name="year-built" placeholder="Year Built" defaultValue className="advanced_select form-control" />
		          </div>
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
		          <div className="adv_extended_options_text" id="adv_extended_options_text_adv">More Search Options</div>
		          <div className="extended_search_check_wrapper">
		            <span id="adv_extended_close_adv" className="adv_extended_close_button">
		              <i className="fas fa-times">
		              </i>
		            </span>
		            <div className="extended_search_checker">
		              <input type="checkbox" id="fireplaceadv" name="fireplace" name-title="Fireplace" defaultValue={1} />
		              <label htmlFor="fireplaceadv">Fireplace</label>
		            </div>
		            <div className="extended_search_checker">
		              <input type="checkbox" id="front-yardadv" name="front-yard" name-title="Front yard" defaultValue={1} />
		              <label htmlFor="front-yardadv">Front yard</label>
		            </div>
		            <div className="extended_search_checker">
		              <input type="checkbox" id="garage-attachedadv" name="garage-attached" name-title="Garage Attached" defaultValue={1} />
		              <label htmlFor="garage-attachedadv">Garage Attached</label>
		            </div>
		            <div className="extended_search_checker">
		              <input type="checkbox" id="gymadv" name="gym" name-title="Gym" defaultValue={1} />
		              <label htmlFor="gymadv">Gym</label>
		            </div>
		            <div className="extended_search_checker">
		              <input type="checkbox" id="heatingadv" name="heating" name-title="Heating" defaultValue={1} />
		              <label htmlFor="heatingadv">Heating</label>
		            </div>
		            <div className="extended_search_checker">
		              <input type="checkbox" id="hot-bathadv" name="hot-bath" name-title="Hot Bath" defaultValue={1} />
		              <label htmlFor="hot-bathadv">Hot Bath</label>
		            </div>
		            <div className="extended_search_checker">
		              <input type="checkbox" id="interior-detailsadv" name="interior-details" name-title="Interior Details" defaultValue={1} />
		              <label htmlFor="interior-detailsadv">Interior Details</label>
		            </div>
		          </div>
		        </div>
		        <div id="results">
		          <div className="results_header"> We found <span id="results_no">0</span> results. <span id="preview_view_all">View results</span>
		          </div>
		          <div id="results_wrapper">
		          </div>
		          <input type="hidden" id="wpestate_regular_search_nonce" name="wpestate_regular_search_nonce" defaultValue={3250663409} />
		          <input type="hidden" name="_wp_http_referer" defaultValue="/" />
		        </div>
		      </form>
		      <div style={{clear: 'both'}}>
		      </div>
		    </div>
		</div>
)
}
}
export default Search;