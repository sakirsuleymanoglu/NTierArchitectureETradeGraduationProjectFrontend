import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as productImageActions from "../../redux/actions/productImageActions";

import {
  Container,
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col,
  Table,
  CardText,
  Alert,
  CardHeader,
} from "reactstrap";

class Product extends Component {
  componentDidMount() {
    this.props.actions.getProduct(this.props.match.params.id);
    this.props.actions.getProducts();
    this.props.actions.getImages(this.props.match.params.id);
    this.props.actions.getFirstImageByProduct(this.props.match.params.id);
  }

  selectImage(image) {
    this.props.actions.changeImage(image);
    this.props.actions.getImageById(image.id);
  }

  render() {
    console.log(this.props.image);
    let url = "localhost";
    return (
      <Container>
        <Row>
          <Col md="6">
            <CardGroup className="mt-4">
              {Object.keys(this.props.currentImage).length === 0 ? (
                <Card>
                  <CardBody>
                    <CardImg
                      width="100%"
                      top
                      srcSet={
                        "https://localhost:44312/" +
                        this.props.firstImage.imagePath
                      }
                    />
                  </CardBody>
                </Card>
              ) : (
                <Card>
                  <CardBody>
                    <CardImg
                      srcSet={
                        "https://localhost:44312/" + this.props.image.imagePath
                      }
                    />
                  </CardBody>
                </Card>
              )}
            </CardGroup>
            <CardGroup className="mt-4">
              <Card>
                <CardBody>
                  {this.props.images.map((image) => (
                    <img
                      width="100"
                      key={image.id}
                      onClick={() => this.selectImage(image)}
                      srcSet={"https://localhost:44312/" + image.imagePath}
                    />
                  ))}
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
          <Col md="6">
            <CardGroup className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Ürün Bilgileri</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table striped>
                    <tbody>
                      <tr>
                        <td className="fw-bold">No</td>
                        <td>{this.props.product.id}</td>
                      </tr>
                      <tr>
                        <td className="fw-bold">Ad</td>
                        <td>{this.props.product.name}</td>
                      </tr>
                      <tr>
                        <td className="fw-bold">Açıklama</td>
                        <td>{this.props.product.description}</td>
                      </tr>
                      <tr>
                        <td className="fw-bold">Kategori</td>
                        <td>{this.props.product.categoryName}</td>
                      </tr>
                      <tr>
                        <td className="fw-bold">Marka</td>
                        <td>{this.props.product.brandName}</td>
                      </tr>
                      <tr>
                        <td className="fw-bold">Fiyat</td>
                        <td>{this.props.product.price} ₺</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </CardGroup>
            {localStorage.getItem("jwtToken") ? (
              <div className="d-grid gap-2 mt-4">
                <Button outline color="primary">
                  Sepete Ekle
                </Button>
              </div>
            ) : null}
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    product: state.productWithDetailsReducer,
    products: state.productListReducer,
    images: state.productImagesReducer,
    currentImage: state.changeImageReducer,
    image: state.imageByIdReducer,
    firstImage: state.firstImageByProductReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProduct: bindActionCreators(
        productActions.getProductWithDetails,
        dispatch
      ),
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      getImages: bindActionCreators(
        productImageActions.getProductImages,
        dispatch
      ),
      changeImage: bindActionCreators(
        productImageActions.changeImage,
        dispatch
      ),
      getImageById: bindActionCreators(
        productImageActions.getImageById,
        dispatch
      ),
      getFirstImageByProduct: bindActionCreators(
        productImageActions.getFirstImageByProduct,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
