import React, { Component } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";
import * as brandActions from "../../redux/actions/brandActions";
import * as priceActions from "../../redux/actions/priceActions";
import { connect } from "react-redux";
import initialState from "../../redux/reducers/initialState"

class PriceList extends Component {
  selectPrice(p) {
    this.props.actions.changePrice(p);
    this.props.actions.getProducts({begin:p.begin, end:p.end});
    this.props.actions.changeBrand(initialState.currentBrand);
    this.props.actions.changeCategory(initialState.currentCategory);
  }

  showAllProducts() {
    this.props.actions.getProducts();
    this.props.actions.changePrice(initialState.currentPrice);
  }

  render() {
    const prices = [
      {
        id: 1,
        text: "0-500",
        begin: 1,
        end: 500,
      },
      { id: 2, text: "500-2500", begin: 500, end: 2500 },
      { id: 3, text: "2500-5000", begin: 2500, end: 5000 },
      { id: 4, text: "5000-10000", begin: 5000, end: 10000 },
    ];

    return (
      <div>
        {Object.keys(this.props.currentPrice).length !== 0 ? (
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
          <ListGroupItem color="warning">Fiyat Aralığı</ListGroupItem>
          {prices.map((p) => (
            <ListGroupItem
              active={p.id === this.props.currentPrice.id}
              key={p.id}
              onClick={() => this.selectPrice(p)}
            >
              {p.text} ₺
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentPrice: state.changePriceReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
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

export default connect(mapStateToProps, mapDispatchToProps)(PriceList);
