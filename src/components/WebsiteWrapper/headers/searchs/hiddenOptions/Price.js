import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
class Price extends Component {
	constructor(props) {
		super(props);
			this.state= { 
				 value: [0, 100000]
			}
		
	}

handleChange=(event, newValue) =>{
	this.setState({
			value: newValue
		})
}

valuetext=(value) =>{
	return `${value}đ`;
}
  render() {
  	// console.log(this.props.price)
  	// var {priceBool} = this.props
  	// var {price} = this.props
    return (
    	<div className="col-md-6 property_price">
		            <div >
      <Typography style={{ fontSize: '12px'}} id="range-slider" gutterBottom>
        Khoảng giá: {this.state.value[0]} triệu đồng - {this.state.value[1]} triệu đồng  
      </Typography>
      <Slider style={{color: '#ddb327', marginTop: '-10px'}}
       min ={0}
       step={1}
       max ={100000}
        value={this.state.value}
        onChange={this.handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={this.props.valuetext}
      />
    </div>
    </div>
)
}
}

export default Price;
