import { Alert, Card, CardBody, CardTitle, Col, Row } from "reactstrap";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { bindActionCreators } from "redux";
import * as authActions from "../../redux/actions/authActions";
import { NavLink } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.actions.login(this.state.email, this.state.password);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  logout = () => {
    this.props.actions.logout();
    window.location.replace("/");
  };

  render() {
    return (
      <div>
        <Row>
          <Col md="3"></Col>
          <Col md="6">
            <Card className="mt-4">
              <CardBody>
                <CardTitle tag="h5" className="text-primary">
                  Giriş Yap
                </CardTitle>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="email">Email</Label>
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
                    <Label for="password">Password</Label>
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
                      Giriş Yap
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col md="3"></Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loginResponse: state.loginReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      login: bindActionCreators(authActions.login, dispatch),
      logout: bindActionCreators(authActions.logout, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
