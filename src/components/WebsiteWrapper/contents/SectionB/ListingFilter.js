import React, { Component } from 'react';


class ListingFilter extends Component {
  render() {
    return (
      <div className="listing_filters_head">
        <input type="hidden" id="page_idx" defaultValue={19518} />
        <div className="dropdown listing_filter_select filter_action_category">
          <div data-toggle="dropdown" id="a_filter_action" className="filter_menu_trigger" data-value="Types"> Loại hình <span className="caret caret_filter">
            </span>
          </div>
          <ul className="dropdown-menu filter_menu" role="menu" aria-labelledby="a_filter_action" style={{marginLeft: '-16px'}}>
            <li role="presentation" data-value="all">Loại hình</li>
            <li role="presentation" data-value="rentals">Cho thuê</li>
            <li role="presentation" data-value="sales">Bán</li>
          </ul>
        </div>
        <div className="dropdown listing_filter_select filter_category">
          <div data-toggle="dropdown" id="a_filter_categ" className="filter_menu_trigger" data-value="Categories"> Thể loại <span className="caret caret_filter">
            </span>
          </div>
          <ul className="dropdown-menu filter_menu" role="menu" aria-labelledby="a_filter_categ">
            <li role="presentation" data-value="all">Các loại</li>
            <li role="presentation" data-value="apartments">Căn hộ</li>
            <li role="presentation" data-value="condos">Chung cư</li>
            <li role="presentation" data-value="houses">Căn nhà</li>
            <li role="presentation" data-value="industrial">Industrial</li>
            <li role="presentation" data-value="land">Đất</li>
            <li role="presentation" data-value="offices">Văn phòng</li>
            <li role="presentation" data-value="retail">Trả góp</li>
            <li role="presentation" data-value="villas">Biệt thự</li>
          </ul>
        </div>
        <div className="dropdown listing_filter_select filter_county">
          <div data-toggle="dropdown" id="a_filter_county" className="filter_menu_trigger" data-value="States"> Trạng thái <span className="caret caret_filter">
            </span>
          </div>
          <ul id="filter_county" className="dropdown-menu filter_menu" role="menu" aria-labelledby="a_filter_county">
            <li role="presentation" data-value="all" data-value2="all">States</li>
            <li role="presentation" data-value="ile-de-france" data-value2="ile-de-france">Île-de-France</li>
          </ul>
        </div>
        <div className="dropdown listing_filter_select filter_city">
          <div data-toggle="dropdown" id="a_filter_cities" className="filter_menu_trigger" data-value="Cities"> Thành phố <span className="caret caret_filter">
            </span>
          </div>
          <ul id="filter_city" className="dropdown-menu filter_menu" role="menu" aria-labelledby="a_filter_cities">
            <li role="presentation" data-value="all" data-value2="all">Cities</li>
            <li role="presentation" data-value="montreuil" data-value2="montreuil" data-parentcounty="ile-de-france">Montreuil</li>
            <li role="presentation" data-value="paris" data-value2="paris" data-parentcounty="ile-de-france">Paris</li>
          </ul>
        </div>
        <div className="dropdown listing_filter_select filter_area">
          <div data-toggle="dropdown" id="a_filter_areas" className="filter_menu_trigger" data-value="Areas">Khu vực<span className="caret caret_filter">
            </span>
          </div>
          <ul id="filter_area" className="dropdown-menu filter_menu" role="menu" aria-labelledby="a_filter_areas">
            <li role="presentation" data-value="all">Areas</li>
            <li role="presentation" data-value="calais" data-parentcity="montreuil">Calais</li>
            <li role="presentation" data-value="clape-en-bas" data-parentcity="montreuil">Clape-en-Bas</li>
            <li role="presentation" data-value="bayonne" data-parentcity="paris">La Villette</li>
            <li role="presentation" data-value="le-touquet" data-parentcity="montreuil">Le Touquet</li>
            <li role="presentation" data-value="notre-dame" data-parentcity="paris">Notre Dame</li>
            <li role="presentation" data-value="saint-germain" data-parentcity="paris">Saint Germain</li>
          </ul>
        </div>
        <div className="dropdown listing_filter_select order_filter ">
          <div data-toggle="dropdown" id="a_filter_order" className="filter_menu_trigger" data-value={0}> Mặc định <span className="caret caret_filter">
            </span>
          </div>
          <ul id="filter_order" className="dropdown-menu filter_menu" role="menu" aria-labelledby="a_filter_order">
            <li role="presentation" data-value={1}>Price High to Low</li>
            <li role="presentation" data-value={2}>Price Low to High</li>
            <li role="presentation" data-value={3}>Newest first</li>
            <li role="presentation" data-value={4}>Oldest first</li>
            <li role="presentation" data-value={5}>Bedrooms High to Low</li>
            <li role="presentation" data-value={6}>Bedrooms Low to high</li>
            <li role="presentation" data-value={7}>Bathrooms High to Low</li>
            <li role="presentation" data-value={8}>Bathrooms Low to high</li>
            <li role="presentation" data-value={0}>Default</li>
          </ul>
        </div>
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