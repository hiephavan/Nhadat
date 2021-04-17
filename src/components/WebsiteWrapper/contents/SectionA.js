import React, { Component } from 'react';
import Quarter1 from './SectionA/Quarter1'
import Quarter2 from './SectionA/Quarter2'
import Quarter3 from './SectionA/Quarter3'
import Quarter4 from './SectionA/Quarter4'
import Quarter5 from './SectionA/Quarter5'

class SectionA extends Component {
  render() {
    return (
    <div style={{backgroundColor:'white'}}>
      <div className="container content_wrapper"  >
          <div className="row">
            <div className="col-xs-12 col-md-12 single_width_page" style={{backgroundColor: 'white', marginTop:'100px'}}>
             <div className="single-content">
                <div data-elementor-type="wp-page" data-elementor-id={19518} className="elementor elementor-19518" data-elementor-settings="[]">
                  <div className="elementor-inner">
                    <div className="elementor-section-wrap">
                	   	<section className="elementor-section elementor-top-section elementor-element elementor-element-23c3a053 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="23c3a053" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}" >
                          <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-row">
                              <Quarter1 />
                              <Quarter2 />
                              <Quarter3 />
                              <Quarter4 />
                              <Quarter5 />
                            </div>
                          </div>
                		</section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix visible-xs">
            </div>
          </div>
      </div>
    </div>
)
}
}
export default SectionA;