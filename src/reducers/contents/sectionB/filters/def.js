import * as types from './../../../../constants/ActionTypes'

var initialState = 
	{ 
		name: 'Mặc định',
		
		
	} 
var myReducer =(state= initialState, action)=>{
	switch(action.type) {
		case types.B_DEFAULT:
			  return {
			 	name: action.def.name,
			 	
			 };

		default: 
		return state;

	}
	console.log(action)
	
}
export default myReducer;