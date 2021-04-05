import React, { Component } from 'react';

class Story extends Component {
  render() {
    return (
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
)
}
}
export default Story;