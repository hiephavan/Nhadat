import * as types from './../../../constants/ActionTypes'

var initialState = false
	
var myReducer =(state= initialState, action)=>{
	switch(action.type) {
		case types.BROKER_AREA_BOOL:
			  return !state
		default: 
		return state;
	}
	console.log(action)
	
}
export default myReducer;
