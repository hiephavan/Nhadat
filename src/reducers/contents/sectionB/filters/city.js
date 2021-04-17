import * as types from './../../../../constants/ActionTypes'

var initialState = 
	{ 
		name: 'Thành phố',
		
		
	} 
var myReducer =(state= initialState, action)=>{
	switch(action.type) {
		case types.B_CITY:
			  return {
			 	name: action.city.name,
			 	
			 };

		default: 
		return state;

	}
	console.log(action)
	
}
export default myReducer;