import React, { Component } from 'react';
import Types from './filters/Types'
import Cate from './filters/Cate'
import Status from './filters/Status'
import City from './filters/City'
import Area from './filters/Area'
import Default from './filters/Default'
class ListingFilter extends Component {
  render() {
    return (
      <div className="listing_filters_head">
        <input type="hidden" id="page_idx" defaultValue={19518} />
        <Types />
        <Cate />
        <Status />
        <City />
        <Area/>
        <Default />
        
        <div className="listing_filter_select listing_filter_views grid_filter_wiew">
          <div id="grid_view" className="icon_selected">
            <i className="fas fa-th">
            </i>
          </div>
        </div>
        <div className="listing_filter_select listing_filter_views list_filter_wiew">
          <div id="list_view" className>
            <i className="fas fa-bars">
            </i>
          </div>
        </div>
        <div data-toggle="dropdown" id="a_filter_county" className data-value="States">
        </div>
      </div>
)
}
}
export default ListingFilter;