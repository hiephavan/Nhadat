import * as types from './../../../../constants/ActionTypes'

var initialState = 
	{ 
		name: 'Trong nước',
		
		
	} 
var myReducer =(state= initialState, action)=>{
	switch(action.type) {
		case types.B_STATUS:
			  return {
			 	name: action.status.name,
			 	
			 };

		default: 
		return state;

	}
	console.log(action)
	
}
export default myReducer;