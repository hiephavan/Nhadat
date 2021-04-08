
import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../../../../../actions/index'

class City extends Component {
  onClick =(filterBy)=> {
  this.props.onFilterCity({
    name: filterBy
  });
}
onCityBoolean =() =>{
  this.props.onCityBool()
}
  render() {
    var {cityBool} = this.props
     var {city} = this.props
     console.log(cityBool)
return (
    <div onClick ={this.onCityBoolean} className={this.props.cityBool === true? "dropdown listing_filter_select filter_city open ":"dropdown listing_filter_select filter_city"}>
          <div data-toggle="dropdown" id="a_filter_citys" className="filter_menu_trigger" data-value="citys">{city.name}<span className="caret caret_filter">
            </span>
          </div>
          <ul id="filter_city" className="dropdown-menu filter_menu" role="menu" aria-labelledby="a_filter_citys">
            <li onClick = {()=>this.onClick('Thành phố')}role="presentation" data-value="all" data-value2="all">Thành phố</li>
            <li onClick = {()=>this.onClick('Hà Nội')}role="presentation" data-value="montreuil" data-value2="montreuil" data-parentcounty="ile-de-france">Hà Nội</li>
            <li onClick = {()=>this.onClick('Tp. Hồ Chí Minh')}role="presentation" data-value="paris" data-value2="paris" data-parentcounty="ile-de-france">Tp. Hồ Chí Minh</li>
         
          </ul>
        </div>
)
}
}
const mapStateToProps=(state) =>{
  return {
    city : state.city,
    cityBool: state.cityBool
  }
}
const mapDispatchToProps=(dispatch, props) =>{
  return {
    onFilterCity:(city) =>  {
      dispatch(actions.bCity(city))

    },
    onCityBool: () => {
      dispatch(actions.bCityBool())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(City);


