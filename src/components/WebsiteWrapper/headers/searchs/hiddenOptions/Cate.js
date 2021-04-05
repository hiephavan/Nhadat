import React, { Component } from 'react';

class Cate extends Component {
  render() {
    return (
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
)
}
}
export default Cate;