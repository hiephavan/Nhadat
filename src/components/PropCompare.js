import React, { Component } from 'react';


class ModalLogin extends Component {
  render() {
    return (
		<div className="prop-compare ">
    <div id="compare_close">
      <i className="fas fa-times" aria-hidden="true">
      </i>
    </div>
    <form method="post" id="form_compare" action="https://paris.wpresidence.net/compare-listings/">
      <h4 className="title_compare">Compare Listings</h4>
      <button id="submit_compare" className="wpresidence_button"> Compare </button>
    </form>
  </div>
)
}
}
export default ModalLogin;