import React, { Component } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as brandActions from "../../redux/actions/brandActions";
import * as productActions from "../../redux/actions/productActions";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as priceActions from "../../redux/actions/priceActions";
import initialState from "../../redux/reducers/initialState";

class BrandList extends Component {
  componentDidMount() {
    this.props.actions.getBrands();
  }

  selectBrand(brand) {
    this.props.actions.changeBrand(brand);
    this.props.actions.getProducts({ brandName: brand.name });
    this.props.actions.changeCategory(initialState.currentCategory);
    this.props.actions.changePrice(initialState.currentPrice);
  }

  showAllProducts() {
    this.props.actions.getProducts();
    this.props.actions.changeBrand(initialState.currentBrand);
  }

  render() {
    return (
      <div>
        {Object.keys(this.props.currentBrand).length !== 0 ? (
          <div className="d-grid gap-2">
            <Button
              onClick={() => this.showAllProducts()}
              size="sm"
              color="danger"
              outline
              className="mt-4"
            >
              Tüm Ürünleri Göster
            </Button>
          </div>
        ) : null}

        <ListGroup className="mt-4">
          <ListGroupItem color="warning">Markalar</ListGroupItem>
          {this.props.brands.map((brand) => (
            <ListGroupItem
              active={brand.id === this.props.currentBrand.id}
              onClick={() => this.selectBrand(brand)}
              key={brand.id}
            >
              {brand.name}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentBrand: state.changeBrandReducer,
    brands: state.brandListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getBrands: bindActionCreators(brandActions.getBrands, dispatch),
      changeBrand: bindActionCreators(brandActions.changeBrand, dispatch),
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      changePrice: bindActionCreators(priceActions.changePrice, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BrandList);
