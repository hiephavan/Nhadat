import React, { Component } from 'react';


class Quarter1 extends Component {
  locateString=(number)=>
  {
    return number.toLocaleString();
  }
  render() {
    return (
      <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-773be5dd" data-id="773be5dd" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;none&quot;,&quot;animation_delay&quot;:400}">
        <div style ={{marginRight: '-10px'}} className="elementor-column-wrap elementor-element-populated">
          
          <div className="elementor-widget-wrap">

            <div className="elementor-element elementor-element-3d77bff1 animated-slow elementor-widget elementor-widget-WpResidence_Display_Categories animated fadeInRight" data-id="3d77bff1" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInRight&quot;,&quot;_animation_delay&quot;:200}" data-widget_type="WpResidence_Display_Categories.default">
              <div className="elementor-widget-container">
                <div className="article_container places_list_2  ">

                  <div className="places_wrapper_type_2" style={{backgroundImage: 'url(https://pariswpresidence.b-cdn.net/wp-content/uploads/2020/06/monaco3.jpg)', height: '340px'}}>
                    <div className="places_cover" data-link="https://paris.wpresidence.net/area/notre-dame/">

                    </div>
                      <div className="places_button_content">
                        <button type="button" style ={{padding: "0px 5px", height: '40px',width: '25px', marginTop: '65%',marginLeft: '-195px', backgroundColor :'#000'}}className="btn "><i class="fas fa-angle-left fa-lg"></i>

                     </button> 
                      </div>
                    
                      <div className="places_type_2_content">
                      <h4>
                        <a href="https://paris.wpresidence.net/area/notre-dame/"> Hà Nội <br/>
                        <span style={{fontSize: '14px'}}>{ this.locateString(8834334)} tin <i className="fas fa-arrow-right fa-xs"></i></span>
                         </a>
                      </h4>
                      {/*<div className="places_type_2_tagline"> beautiful &amp; eco-friendly</div>
                      <div className="places_type_2_listings_no"> 5 Listings</div>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
)
}
}
export default Quarter1;