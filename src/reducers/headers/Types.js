import * as types from './../../constants/ActionTypes'

var initialState = 
	{
		name: 'Loại',
		status: false
	}

var myReducer =(state= initialState, action)=>{
	switch(action.type) {
		case types.TYPES:
			 var newType ={
			 	name: action.type.name,
			 	status: action.type.status
			 	}
		default: return state

	}
	console.log(action)
	
}
export default myReducer;