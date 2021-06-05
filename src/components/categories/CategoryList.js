import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";
import * as brandActions from "../../redux/actions/brandActions";
import * as priceActions from "../../redux/actions/priceActions";
import initialState from "../../redux/reducers/initialState"

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }

  selectCategory = (category) => {
    this.props.actions.changeCategory(category);
    this.props.actions.getProducts({categoryName:category.name});
    this.props.actions.changeBrand(initialState.currentBrand);
    this.props.actions.changePrice(initialState.currentPrice);
  };

  showAllProducts() {
    this.props.actions.getProducts();
    this.props.actions.changeCategory(initialState.currentCategory);
  }

  render() {
    return (
      <div>
        {Object.keys(this.props.currentCategory).length !== 0 ? (
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
          <ListGroupItem color="warning">Kategoriler</ListGroupItem>
          {this.props.categories.map((category) => (
            <ListGroupItem
              active={category.id === this.props.currentCategory.id}
              onClick={() => this.selectCategory(category)}
              key={category.id}
            >
              {category.name}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      changeBrand: bindActionCreators(brandActions.changeBrand, dispatch),
      changePrice: bindActionCreators(priceActions.changePrice, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
