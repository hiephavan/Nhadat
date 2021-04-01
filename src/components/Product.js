import React, { Component } from 'react';


class Product extends Component {
  // constructor(props){
  //   super(props);
  //   this.onAddToCart = this.onAddToCart.bind(this)
  // }

  // onAddToCart(){
  //   alert(this.props.children + '-' + this.props.price)
  // }
  onAddToCart =() => {
    alert(this.props.children + '-' + this.props.price)
  }
  onClick(text){
    alert(text)
    console.log(text)
  }
  render() {
    return (
      <div> 
         <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="thumbnail">
              <img alt={this.props.name}  src={this.props.img}/>
              <div className= "caption">
                <h3>{this.props.children}</h3>
                <p>
                  {this.props.price} $
                </p>
                <p>
                  <a className="btn btn-primary"  role="button"
                  onClick = {()=>{this.onClick('Purchased success')}} >Mua ngay</a>
                  <a className="btn btn-primary"  role="button"
                  onClick = {this.onAddToCart }>Mua ngay</a>
                  <a className="btn btn-primary"  role="button"
                  onClick = {this.onAddToCart }>Mua ngay</a>
                </p>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Product;
