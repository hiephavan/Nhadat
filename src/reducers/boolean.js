import * as types from './../constants/ActionTypes'

var initialState = false;
var myReducer =(state= initialState, action)=>{
	switch(action.type) {
		case types.BOOLEAN:
			return !state
		default: return state

	}
	console.log(action)
	
}
export default myReducer;