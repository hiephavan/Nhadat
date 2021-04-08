import * as types from './../../../../constants/ActionTypes'

var initialState = 
	{ 
		name: 'Tất cả',
		
		
	} 
var myReducer =(state= initialState, action)=>{
	switch(action.type) {
		case types.B_TYPES:
			  return {
			 	name: action.bTypes.name,
			 	
			 };

		default: 
		return state;

	}
	console.log(action)
	
}
export default myReducer;
