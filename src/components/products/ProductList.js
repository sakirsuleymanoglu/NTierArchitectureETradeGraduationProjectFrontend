import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as productImageActions from "../../redux/actions/productImageActions";
import * as basketActions from "../../redux/actions/basketActions";

import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  CardGroup,
} from "reactstrap";

import { NavLink } from "react-router-dom";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }

  add(userId, productId) {
    this.props.actions.addToBasket(userId, productId);
  }

  render() {
    return (
      <div>
        {this.props.products.map((product) => (
          <CardGroup key={product.id} className="mt-4">
            <Card>
              <CardImg
                top
                width="100%"
                srcSet={"https://localhost:44312/" + product.imagePath}
                alt={product.name}
              />
              <CardBody>
                <CardTitle tag="h6">
                  {product.name}
                  <div className="badge bg-danger text-wrap">
                    {product.price} ₺
                  </div>
                </CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-primary">
                  <div className="badge bg-primary text-wrap">
                    {product.brandName}
                  </div>
                </CardSubtitle>
                <CardText>{product.description}</CardText>
                <NavLink
                  className="btn btn-outline-success"
                  to={`/products/${product.id}`}
                >
                  Detaya Git
                </NavLink>
                {localStorage.getItem("jwtToken") ? (
                  <Button
                    color="primary"
                    outline
                    className="ms-2"
                    onClick={() => this.add(this.props.user.id, product.id)}
                  >
                    Sepete Ekle
                  </Button>
                ) : null}
              </CardBody>
            </Card>
          </CardGroup>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
    image: state.firstImageByProductReducer,
    user: state.userReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      getImageById: bindActionCreators(
        productImageActions.getFirstImageByProduct,
        dispatch
      ),
      addToBasket: bindActionCreators(basketActions.add, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
