import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import BrandList from "../brands/BrandList";
import CategoryList from "../categories/CategoryList";
import PriceList from "../price/PriceList";
import ProductList from "../products/ProductList";
import Search from "../toolbox/Search";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs="12">
            <Search></Search>
          </Col>
        </Row>
        <Row>
          <Col md="3">
            <CategoryList></CategoryList>
            <PriceList></PriceList>
          </Col>
          <Col md="6">
            <ProductList p={this.props.products}></ProductList>
          </Col>
          <Col md="3">
            <BrandList></BrandList>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.productListReducer,
    user: state.userReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
