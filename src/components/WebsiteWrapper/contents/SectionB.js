import React, { Component } from 'react';
import ListingFilter from './SectionB/ListingFilter'
import ListingModel from './SectionB/ListingModel'

class SectionB extends Component {
  render() {
    return (
	   <section className="elementor-section elementor-top-section elementor-element elementor-element-2ada4da6 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="2ada4da6" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}" >
          <div className="elementor-container elementor-column-gap-default" >
            <div className="elementor-row">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-29f70480" data-id="29f70480" data-element_type="column">
                <div className="elementor-column-wrap elementor-element-populated">
                  <div className="elementor-widget-wrap">
                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-59834475 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id={59834475} data-element_type="section">
                      <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-row">
                          <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-37a4c915" data-id="37a4c915" data-element_type="column">
                            <div className="elementor-column-wrap">
                              <div className="elementor-widget-wrap">
                              </div>
                            </div>
                          </div>
                          <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-520569fb" data-id="520569fb" data-element_type="column">
                            <div className="elementor-column-wrap elementor-element-populated">
                              <div className="elementor-widget-wrap">
                                <div className="elementor-element elementor-element-5a7a599d elementor-widget elementor-widget-heading animated fadeIn" data-id="5a7a599d" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;,&quot;_animation_delay&quot;:200}" data-widget_type="heading.default">
                                  <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">Chúng tôi bán và mua nhiều loại tài sản phù hợp với mọi mức giá và thị hiếu</h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-2b4c892" data-id="2b4c892" data-element_type="column">
                            <div className="elementor-column-wrap">
                              <div className="elementor-widget-wrap">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <div className="elementor-element elementor-element-490d6a6d elementor-widget elementor-widget-Wpresidence_Filter_List_Properties" data-id="490d6a6d" data-element_type="widget" data-widget_type="Wpresidence_Filter_List_Properties.default">
                        <ListingFilter />
                        <ListingModel /> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </section>
)
}
}
export default SectionB;