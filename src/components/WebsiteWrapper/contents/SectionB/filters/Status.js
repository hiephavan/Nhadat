import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../../../../../actions/index'

class Status extends Component {
  onClick =(filterBy)=> {
  this.props.onFilterStatus({
    name: filterBy
  });
}
onStatusBoolean =() =>{
  this.props.onStatusBool()
}
  render() {
    var {statusBool} = this.props
     var {status} = this.props
return (
    <div onClick ={this.onStatusBoolean} className={this.props.statusBool===true? "dropdown listing_filter_select filter_states open ":"dropdown listing_filter_select filter_states"}>
          <div data-toggle="dropdown" id="a_filter_county" className="filter_menu_trigger" data-value="States"> {status.name} <span className="caret caret_filter">
            </span>
          </div>
          <ul id="filter_county" className="dropdown-menu filter_menu" role="menu" aria-labelledby="a_filter_county">
            <li onClick = {()=>this.onClick('Trong nước')} role="presentation" data-value="all" data-value2="all">Trong nước</li>
            <li onClick = {()=>this.onClick('Nước ngoài')} role="presentation" data-value="ile-de-france" data-value2="ile-de-france">Nước ngoài</li>
          </ul>
        </div>
)
}
}
const mapStateToProps=(state) =>{
  return {
    status : state.status,
    statusBool: state.statusBool
  }
}
const mapDispatchToProps=(dispatch, props) =>{
  return {
    onFilterStatus:(status) =>  {
      dispatch(actions.bStatus(status))

    },
    onStatusBool: () => {
      dispatch(actions.bStatusBool())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Status);
