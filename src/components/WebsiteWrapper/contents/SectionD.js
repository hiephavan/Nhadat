import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../../../actions/index'
import SectionD1 from './SectionD/SectionD1'
import SectionD2 from './SectionD/SectionD2'
import SectionD3 from './SectionD/SectionD3'
import SectionD4 from './SectionD/SectionD4'

class SectionD extends Component {

  onClick = ()=> {
  this.props.onNewsShow();
}
  render() {
    var {newsShow} = this.props
    return (
	   <section className="elementor-section elementor-top-section elementor-element elementor-element-ee37389 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="ee37389" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;,&quot;shape_divider_bottom&quot;:&quot;mountains&quot;}" style={{width: '1192px',left: '-45px'}}>
          <div className="elementor-shape elementor-shape-bottom" data-negative="false">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
              <path className="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z">
              </path>
              <path className="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z">
              </path>
              <path className="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z">
              </path>
            </svg>
          </div>
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-row">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1fa73db9" data-id="1fa73db9" data-element_type="column">
                <div className="elementor-column-wrap elementor-element-populated">
                  <div className="elementor-widget-wrap">
                    <SectionD1 />
                    <SectionD2 />
                    <SectionD3 />
                    {newsShow ===false ? 
                    <div className="button_next" style ={{ paddingBottom: '90px', marginTop: '20px'}}>
                      <button onClick ={this.onClick} type="button" className="btn btn-default">Xem thêm <i style ={{marginLeft: '5px'}} className="fas fa-angle-double-down"></i> </button>
                    </div>: ''
                  } 
                  {newsShow ===true? <SectionD4 />: '' }
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>
)
}
}
const mapStateToProps=(state) =>{
  return {
    newsShow : state.newsShow,
  
  }
}
const mapDispatchToProps=(dispatch, props) =>{
  return {
    onNewsShow:() =>  {
      dispatch(actions.newsShow())
  }
}
} 
export default connect(mapStateToProps,mapDispatchToProps)(SectionD);
