import React, { Component } from 'react';
import Quarter1 from './SectionA/Quarter1'
import Quarter2 from './SectionA/Quarter2'
import Quarter3 from './SectionA/Quarter3'
import Quarter4 from './SectionA/Quarter4'

class SectionA extends Component {
  render() {
    return (
	   	<section className="elementor-section elementor-top-section elementor-element elementor-element-23c3a053 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="23c3a053" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}" style={{width: '1192px', left: '-45px'}}>
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-row">
              <Quarter1 />
              <Quarter2 />
              <Quarter3 />
              <Quarter4 />
            </div>
          </div>
		</section>
)
}
}
export default SectionA;