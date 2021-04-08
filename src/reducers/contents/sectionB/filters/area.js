import * as types from './../../../../constants/ActionTypes'

var initialState = 
	{ 
		name: 'Khu vực',
		
		
	} 
var myReducer =(state= initialState, action)=>{
	switch(action.type) {
		case types.B_AREA:
			  return {
			 	name: action.area.name,
			 	
			 };

		default: 
		return state;

	}
	console.log(action)
	
}
export default myReducer;