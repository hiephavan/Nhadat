import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../../../../../actions/index'
class Story extends Component {
	onClick =(filterBy)=> {
	this.props.onStory({
		value: filterBy,

	});
}
onShowStory =() =>{
	this.props.showStory()
	
}
  render() {
  	var {story} =this.props
    return (
    	<div className="col-md-3 stories-number">
		            <div onClick = {()=>this.onShowStory()} className= {this.props.storyBool===true? "dropdown form-control open": 'dropdown form-control'}>
		              <div data-toggle="dropdown" id="stories-number" className=" filter_menu_trigger  " xx all stories number data-value="all"> {story.value===0? 'Tầng' : story.value}  <span className="caret  caret_filter ">
		                </span>
		              </div>
		              <input type="hidden" name="stories-number" defaultValue />
		              <ul id="stories-number" className="dropdown-menu filter_menu" role="menu" aria-labelledby="stories-number">
		                <li onClick ={ ()=>this.onClick(0) }role="presentation" data-value="all">Tầng</li>
		                <li onClick ={ ()=>this.onClick(1) }role="presentation" data-value={1}>1</li>
		                <li onClick ={ ()=>this.onClick(2) }role="presentation" data-value={2}>2</li>
		                <li onClick ={ ()=>this.onClick(3) }role="presentation" data-value={3}>3</li>
		                <li onClick ={ ()=>this.onClick(4) }role="presentation" data-value={4}>4</li>
		                <li onClick ={ ()=>this.onClick(5) }role="presentation" data-value={5}>5</li>
		                <li onClick ={ ()=>this.onClick(6) }role="presentation" data-value={6}>6</li>
		              </ul>
		            </div>
		          </div>
)
}
}
const mapStateToProps=(state) =>{
  return {
    story : state.story,
    storyBool: state.storyBool
  
  }
}
const mapDispatchToProps=(dispatch, props) =>{
  return {
    onStory:(story) =>  {
      dispatch(actions.story(story))

    },
    showStory: () =>
    {
    	dispatch(actions.storyBool())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Story);