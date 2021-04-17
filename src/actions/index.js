import * as types from './../constants/ActionTypes'




//
export const toggleSearch =()=> {
	return {
		type: types.TOGGLE_SEARCH

	}
}
export const filterTypes = (filter)=> {
	return {
		type: types.FILTER_TYPES,
		filter: filter
	}
}
export const boolean = ()=> {
	return {
		type: types.BOOLEAN,
		
	}
}
//hidden search header

//hidden search for categories
export const categories = (cate)=> {
	return {
		type: types.CATEGORIES,
		cate: cate
		
	}
}
export const cateBool = ()=> {
	return {
		type: types.HIDDEN_CATE,
		
	}
}

//hidden search for bathroom
export const bath = (bath)=> {
	return {
		type: types.BATH_ROOM,
		bath: bath
		
	}
}
export const  bathBool= ()=> {
	return {
		type: types.HIDDEN_BATH,
		
	}
}
//hidden search for bedroom
export const bedBool = ()=> {
	return {
		type: types.HIDDEN_BED,
		
	}
}
export const bed = (bed)=> {
	return {
		type: types.BED_ROOM,
		bed: bed
		
	}
}
//hidden search for story
export const storyBool = ()=> {
	return {
		type: types.HIDDEN_STORY,
		
	}
}
export const story = (story)=> {
	return {
		type: types.STORY,
		story: story
		
	}
}
//hidden search for slide range


// CONTENT 
// SECTION B
 // navbar
 export const bCate = (bCate)=> {
	return {
		type: types.B_CATE,
		bCate: bCate
		
	}
}
export const bCateBool = ()=> {
	return {
		type: types.CATE_BOOL,
		
	}
}

export const bTypes = (bTypes)=> {
	return {
		type: types.B_TYPES,
		bTypes: bTypes
		
	}
}
export const bTypesBool = ()=> {
	return {
		type: types.TYPES_BOOL,
		
	}
}
export const bCity = (city)=> {
	return {
		type: types.B_CITY,
 		city
		
	}
}
export const bCityBool = ()=> {
	return {
		type: types.CITY_BOOL,
		
	}
}

export const bArea = (area)=> {
	return {
		type: types.B_AREA,
 		area
		
	}
}
export const bAreaBool = ()=> {
	return {
		type: types.AREA_BOOL,
		
	}
}
export const bDefault = (def)=> {
	return {
		type: types.B_DEFAULT,
 		def
		
	}
}
export const bDefaultBool = ()=> {
	return {
		type: types.DEFAULT_BOOL,
		
	}
}
export const bStatus = (status)=> {
	return {
		type: types.B_STATUS,
 		status
		
	}
}
export const bStatusBool = ()=> {
	return {
		type: types.STATUS_BOOL,
		
	}
}

// Section B Hidden/Show
export const modelShow = ()=> {
	return {
		type: types.MODEL_SHOW,
		
	}
}
//Section C 
export const brokerBool = ()=> {
	return {
		type: types.BROKER_BOOL,
		
	}
}
export const brokerAreaBool = ()=> {
	return {
		type: types.BROKER_AREA_BOOL,
		
	}
}

// Section D news Hidden/Show
export const newsShow = ()=> {
	return {
		type: types.NEWS_SHOW,
		
	}
}








































