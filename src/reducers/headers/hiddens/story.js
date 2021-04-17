import * as types from './../../../constants/ActionTypes'

var initialState = 
	{ 
		value: 0,
		
		
	} 
var myReducer =(state= initialState, action)=>{
	switch(action.type) {
		case types.STORY:
			  return {
			 	value: action.story.value,
			 	
			 };

		default: 
		return state;

	}
	console.log(action)
	
}
export default myReducer;
