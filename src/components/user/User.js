import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CardHeader,
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  CardText,
  Table,
} from "reactstrap";
import { bindActionCreators } from "redux";

class User extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md="6">
            <Card className="mt-4">
              <CardHeader>
                <CardTitle tag={"h5"}>Kullanıcı</CardTitle>
              </CardHeader>
              <CardBody>
                <Table striped>
                  <tbody>
                    <tr>
                      <td className="fw-bold">Ad</td>
                      <td>{this.props.user.firstName}</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Soyad</td>
                      <td>{this.props.user.lastName}</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">E-Posta</td>
                      <td>{this.props.user.email}</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card className="mt-4">
              <CardHeader>
                <CardTitle tag={"h5"}>Bilgileri Güncelle</CardTitle>
              </CardHeader>
              <CardBody></CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.getUserReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
