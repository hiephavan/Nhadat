import React, { Component } from 'react';
import throttle from 'lodash.throttle';
import { useState, useEffect } from "react";
import { connect } from 'react-redux'
import * as actions from './../../../actions/index'
import SectionC1 from './SectionC/sectionC1'
import SectionC2 from './SectionC/sectionC2'

 function SectionC() {
    const [width, setWidth]   = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

   
    const marginleft = ()=>{
       
      if(`${width}`<767){
       return 15;
      }
      else if(1200>`${width}`>767)
      {
       return  45;
      }
      else
      { 
        return (((`${width}`-1200)/2) +45 )
      }
    }

    
    return (
	   <section className="elementor-section elementor-top-section elementor-element elementor-element-e295a7 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e295a7" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}" style={{width: `${width}px`, left: `-${marginleft()}px`, height: '500px'}}>
          <div className="elementor-background-overlay">
          </div>
          <div className="elementor-container elementor-column-gap-default" style ={{maxWidth: '840px'}}>
            <div className="elementor-row">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1fa338fb" data-id="1fa338fb" data-element_type="column">
                <div className="elementor-column-wrap elementor-element-populated">
                  <div className="elementor-widget-wrap">
                    <div className="search_wrapper search_wr_10     with_search_on_start  without_search_form_float " id="search_wrapper" data-postid={19518} style={{marginTop: '60px', marginBottom: '-5px',display: 'flex',  justifyContent: 'center'}}>
                      <div className="adv-search-1  adv_extended_class" id="adv-search-1">
                       <h2 style ={{display: 'flex', textAlign :"center", color: 'White', justifyContent: 'center', marginBottom: '50px'}} > Tìm kiếm thông tin nhà môi giới trong khu vực của bạn </h2>
                        <form role="search" method="get" action="https://paris.wpresidence.net/advanced-search-2/" style={{marginTop: '15px'}}>
                          <SectionC1 />
                          <SectionC2 />

                          <div className="adv-search-1  adv_extended_class" id="adv-search-1">
                            <div style ={{  padding: '0px'}} className="col-md-2">
                              <input name="submit" type="submit" className="wpresidence_button" id="advanced_submit_10" value="Tìm kiếm" />
                            </div>
                          </div>
                          <input type="hidden" name="is10" defaultValue={10} />
                          <div id="results">
                            <div className="results_header"> We found <span id="results_no">0</span> results. <span id="preview_view_all">View results</span>
                            </div>
                            <div id="results_wrapper">
                            </div>
                            <input type="hidden" id="wpestate_regular_search_nonce" name="wpestate_regular_search_nonce" defaultValue={3250663409} />
                            <input type="hidden" name="_wp_http_referer" defaultValue="/" />
                          </div>
                        </form>
                        <div style={{clear: 'both'}}>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
)
}


export default (SectionC);



