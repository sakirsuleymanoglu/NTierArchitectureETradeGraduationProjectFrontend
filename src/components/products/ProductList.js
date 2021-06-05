import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as productImageActions from "../../redux/actions/productImageActions";

import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  CardGroup,
  Badge,
} from "reactstrap";

import { NavLink } from "react-router-dom";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
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
                  <Button color="primary" outline className="ms-2">
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
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
