import * as types from './../../../../constants/ActionTypes'

var initialState = 
	{ 
		name: 'Các loại',
		
		
	} 
var myReducer =(state= initialState, action)=>{
	switch(action.type) {
		case types.B_CATE:
			  return {
			 	name: action.bCate.name,
			 	
			 };

		default: 
		return state;

	}
	console.log(action)
	
}
export default myReducer;