import React, { Component } from 'react';
import Types from './searchs/Types'
// import Hidden from './searchs/Hidden'
import Result from './searchs/Result'
import Submit from './searchs/Submit'
import Textbox from './searchs/Textbox'
class Search extends Component {
  render() {
    return (
    	<div className="search_wrapper search_wr_10     with_search_on_start  without_search_form_float " id="search_wrapper" data-postid={19518} style={{marginTop: '100px', marginBottom: '-5px', backgroundColor:'#f5f5f5'}}>
		    <div className="adv-search-1  adv_extended_class" id="adv-search-1">
		      <form style ={{marginTop: '15px'}} role="search" method="get" action="https://paris.wpresidence.net/advanced-search-2/">
		        <Textbox />

		        <Types />
		        <Submit />
		        <input type="hidden" name="is10" defaultValue={10} />
		        
		       
		        <Result />
		      </form>
		      <div style={{clear: 'both'}}>
		      </div>
		    </div>
		</div>
)
}
}
export default Search;