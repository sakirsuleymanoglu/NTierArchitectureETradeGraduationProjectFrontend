import React, { Component } from "react";
import { connect } from "react-redux";
import * as userActions from "../../redux/actions/userActions";
import {
  CardHeader,
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
  Label,
  Input,
  FormGroup,
  Button,
  Form,
} from "reactstrap";
import { bindActionCreators } from "redux";
import * as basketActions from "../../redux/actions/basketActions"

class User extends Component {

  componentDidMount(){
    this.props.actions.getBasket(this.props.user.id);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.actions.updateUser(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.password,
      this.props.match.params.id
    );
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

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
              <CardBody>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="firstName">Ad</Label>
                    <Input
                      className="mt-1"
                      type="firstName"
                      name="firstName"
                      id="firstName"
                      placeholder="Adınızı giriniz"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="lastName">Soyad</Label>
                    <Input
                      className="mt-1"
                      type="lastName"
                      name="lastName"
                      id="lastName"
                      placeholder="Soyadınızı Giriniz"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">E-posta</Label>
                    <Input
                      className="mt-1"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="E-posta adresinizi giriniz"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Parola</Label>
                    <Input
                      className="mt-1"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Parolanızı giriniz"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <div className="d-grid gap-2 mt-2">
                    <Button type="submit" color="primary">
                      Güncelle
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userReducer,
    userUpdateResponse: state.updateUserReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      updateUser: bindActionCreators(userActions.updateUser, dispatch),
      getBasket: bindActionCreators(basketActions.getBasket, dispatch)
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
