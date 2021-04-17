import {combineReducers} from 'redux'

import ToggleSearch from './headers/ToggleSearch'
import Filter from './headers/Filter'
import boolean from './boolean'
import cate from './headers/hiddens/cate'
import cateBool from './headers/hiddens/cateBool'
import bath from './headers/hiddens/bath'
import bathBool from './headers/hiddens/bathBool'
import bed from './headers/hiddens/bed'
import bedBool from './headers/hiddens/bedBool'
import story from './headers/hiddens/story'
import storyBool from './headers/hiddens/storyBool'
import area from './contents/sectionB/filters/area'
import areaBool from './contents/sectionB/filters/areaBool'
import bCate from './contents/sectionB/filters/bCate'
import bCateBool from './contents/sectionB/filters/bCateBool'
import bTypes from './contents/sectionB/filters/bTypes'
import typesBool from './contents/sectionB/filters/typesBool'
import status from './contents/sectionB/filters/status'
import statusBool from './contents/sectionB/filters/statusBool'
import city from './contents/sectionB/filters/city'
import cityBool from './contents/sectionB/filters/cityBool'
import def  from './contents/sectionB/filters/def'
import defaultBool from './contents/sectionB/filters/defaultBool'
import modelShow from './contents/sectionB/models/modelShow'
import newsShow from './contents/sectionD/newsShow'
import brokerBool from './contents/sectionC/brokerBool'
import brokerAreaBool from './contents/sectionC/brokerAreaBool'
const myReducer = combineReducers ({
	//Common
		boolean: boolean,
	//Header
		ToggleSearch: ToggleSearch,
		Filter: Filter,
	//Hidden_Search header
		cate: cate,
		cateBool,
		bath: bath,
		bathBool: bathBool,
		bed: bed,
		bedBool: bedBool,
		story,
		storyBool,
		area,
		areaBool,
		bCate,
		bCateBool,
		bTypes,
		typesBool,
		status,
		statusBool,
		city,
		cityBool,
		def,
		defaultBool,
		modelShow,
		newsShow,
		brokerBool,
        brokerAreaBool
		
})
export default myReducer;
