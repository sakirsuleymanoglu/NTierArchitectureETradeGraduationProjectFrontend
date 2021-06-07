import { Button, CardGroup, CardHeader } from "reactstrap";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardTitle, CardBody, CardText, Row, Col } from "reactstrap";
import { bindActionCreators } from "redux";
import * as basketActions from "../../redux/actions/basketActions";

class Basket extends Component {
  totalPrice = 0;

  componentDidMount() {
    this.props.actions.getBasket(this.props.match.params.id);
    this.props.actions.getTotalPrice();
  }

  add(userId, productId) {
    this.props.actions.addToBasket(userId, productId);
    window.location.reload();
  }

  delete(userId, productId) {
    this.props.actions.deleteToBasket(userId, productId);
    window.location.reload();
  }

  pay(basket) {
    basket.map((b) => {
      alert(
        b.count +
          " adet " +
          b.productBrandName +
          " " +
          b.productName +
          " için kredi kartınızdan " +
          b.totalPrice +
          " ₺ çekilmiştir."
      );
      this.props.actions.deleteBasket(b.id);
    });

    alert(
      "Kredi kartınızdan toplam çekilen miktar: " +
        this.props.fullTotalPrice.data +
        " ₺"
    );

    alert(
      "Alışveriş başarıyla gerçekleşmiştir. Bizi tercih ettiğiniz için teşekkür ederiz :)"
    );

    window.location.reload();
  }

  render() {
    return (
      <div>
        <Row>
          <Col md="3"></Col>
          <Col md="6">
            {Object.keys(this.props.basket).length > 0
              ? this.props.basket.data.map((basket) => (
                  <CardGroup>
                    <Card key={basket.id} className="mt-4">
                      <CardBody>
                        <CardTitle>
                          <img
                            width="50"
                            srcSet={
                              "https://localhost:44312/" +
                              basket.productImagePath
                            }
                          />
                          {basket.productBrandName +
                            " " +
                            basket.productName +
                            " " +
                            basket.productPrice +
                            " ₺"}
                        </CardTitle>
                        <div className="badge bg-secondary text-wrap ">
                          {basket.count} Adet
                        </div>
                        <div
                          className="badge bg-danger text-wrap ms-2"
                          onClick={() =>
                            this.delete(basket.userId, basket.productId)
                          }
                        >
                          -
                        </div>
                        <div
                          className="badge bg-success text-wrap ms-2"
                          onClick={() =>
                            this.add(basket.userId, basket.productId)
                          }
                        >
                          +
                        </div>
                        <div className="badge bg-primary text-wrap ms-2">
                          Toplam: {basket.totalPrice} ₺
                        </div>
                      </CardBody>
                    </Card>
                  </CardGroup>
                ))
              : null}
          </Col>
          <Col md="3"></Col>
        </Row>
        <Row>
          <Col md="3"></Col>
          <Col md="6">
            {this.props.fullTotalPrice.data !== 0 ? (
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle tag="h5">Toplam Fiyat</CardTitle>
                </CardHeader>
                <CardBody>
                  <CardText>
                    {this.props.fullTotalPrice.data} ₺
                    <div
                      className="badge bg-success text-wrap ms-2"
                      onClick={() => this.pay(this.props.basket.data)}
                    >
                      Alışverişi Tamamla
                    </div>
                  </CardText>
                </CardBody>
              </Card>
            ) : (
              <Card className="mt-4">
                <CardBody>
                  <CardText>Sepetiniz Boş</CardText>
                </CardBody>
              </Card>
            )}
          </Col>
          <Col md="3"></Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    basket: state.getBasketReducer,
    basketResponse: state.addOrDeleteReducer,
    fullTotalPrice: state.getTotalPriceReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getBasket: bindActionCreators(basketActions.getBasket, dispatch),
      addToBasket: bindActionCreators(basketActions.add, dispatch),
      deleteToBasket: bindActionCreators(basketActions.deleteOne, dispatch),
      getTotalPrice: bindActionCreators(basketActions.getTotalPrice, dispatch),
      deleteBasket: bindActionCreators(basketActions.deleteBasket, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
