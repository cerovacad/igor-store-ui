import React, { Component } from "react";
import ProductGrid from "../components/ProductGrid";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";

class Home extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return <ProductGrid />;
  }
}

export default connect(
  null,
  { fetchProducts }
)(Home);
