import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
		<div id="results">
		  <div className="results_header"> We found <span id="results_no">0</span> results. <span id="preview_view_all">View results</span>
		  </div>
		  <div id="results_wrapper">
		  </div>
		  <input type="hidden" id="wpestate_regular_search_nonce" name="wpestate_regular_search_nonce" defaultValue={3250663409} />
		  <input type="hidden" name="_wp_http_referer" defaultValue="/" />
		</div>
)
}
}
export default Result;