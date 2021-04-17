import * as types from './../../constants/ActionTypes'

var initialState = 
	{ 
		name: 'Tất cả',
		
	} 
var myReducer =(state= initialState, action)=>{
	switch(action.type) {
		case types.FILTER_TYPES:
			  return {
			 	name: action.filter.name,
			 	
			 };


		default: 
		return state;

	}
	console.log(action)
	
}
export default myReducer;