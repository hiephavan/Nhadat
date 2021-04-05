import React, { Component } from 'react';

class Bath extends Component {
  render() {
    return (
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
)
}
}
export default Bath;