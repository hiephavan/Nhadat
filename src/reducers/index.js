import {combineReducers} from 'redux'
import Types from './headers/Types'
import ToggleSearch from './headers/ToggleSearch'
const myReducer = combineReducers ({
	Types: Types,
	ToggleSearch: ToggleSearch

})
export default myReducer;