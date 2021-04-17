import * as types from './../../../constants/ActionTypes'

var initialState = 
	{ 
		value: 0,
		
		
	} 
var myReducer =(state= initialState, action)=>{
	switch(action.type) {
		case types.BATH_ROOM:
			  return {
			 	value: action.bath.value,
			 	
			 };

		default: 
		return state;

	}
	console.log(action)
	
}
export default myReducer;
