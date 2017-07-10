import React, { Component } from 'react';
import { updateAllProducts, fetchProject } from '../data/product/ProductAction';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import ProductSelectors from '../data/product/ProductSelectors';

class App extends Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
    this.dispatch = this.props.store.dispatch;
    this.stateGlobal = this.props.store.getState();
    console.log('this.stateGlobal', this.stateGlobal)
    const item = this.props.item

    if (this.props.productName == undefined){
      this.productName = this.stateGlobal.products.productsName;
    }else{
      console.log("else", this.props)
      this.productName = this.props.productName;
    }
  }
  componentDidMount(){
    
  }
  onClick(event){
    this.dispatch(updateAllProducts('cadeira'))
    const item = this.props.item
    console.log("teste", this.props)

  }
  render() {
    return (
      <div onClick={this.onClick}>{this.productName}</div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("mapStateToProps state", state);
  return {
      item: state.products.productsName
  };
};

export default connect(mapStateToProps)(App);

