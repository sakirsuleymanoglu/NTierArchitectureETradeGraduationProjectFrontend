import { Alert, Card, CardBody, CardTitle, Col, Row } from "reactstrap";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { bindActionCreators } from "redux";
import * as authActions from "../../redux/actions/authActions";
import { NavLink } from "react-router-dom";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.actions.register(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.password
    );
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    console.log(this.props.registerResponse);
    return (
      <div>
        <Row>
          <Col md="3"></Col>
          <Col md="6">
            {this.props.registerResponse.success ? (
              <Alert className="mt-4">
                {this.props.registerResponse.message}
                <NavLink to={"/"}>
                  <div className="badge bg-primary text-wrap ms-2">
                    Anasayfaya Git
                  </div>
                </NavLink>
                <NavLink to={"/login"}>
                  <div className="badge bg-primary text-wrap ms-2">
                    Giriş Yap
                  </div>
                </NavLink>
              </Alert>
            ) : (
              <Card className="mt-4">
                <CardBody>
                  <CardTitle tag="h5" className="text-primary">
                    Kayıt Ol
                  </CardTitle>
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
                        Kayıt Ol
                      </Button>
                    </div>
                  </Form>
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
    registerResponse: state.registerReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      register: bindActionCreators(authActions.register, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
