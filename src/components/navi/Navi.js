import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

import { NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../../redux/actions/authActions";
import * as userActions from "../../redux/actions/userActions";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const logout = () => {
    props.actions.logout();
    window.location.replace("/");
  };

  useEffect(() => {
    if (localStorage.getItem("email")) {
      props.actions.getUser(localStorage.getItem("email"));
    }
  }, []);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/" className="ms-2">
          MARMARA MARKET
        </NavbarBrand>
        <NavbarToggler className="me-2" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {localStorage.getItem("jwtToken") ? (
            <Nav className="mr-auto" navbar>
              {props.user.firstName !== undefined &&
              props.user.lastName !== undefined ? (
                <NavItem>
                  <NavLink
                    to={"/user/" + props.user.id + "/profile"}
                    className="nav-link ms-2"
                  >
                    {props.user.firstName + " " + props.user.lastName}
                  </NavLink>
                </NavItem>
              ) : null}
              <NavItem>
                <NavLink onClick={logout} to={"/"} className="nav-link ms-2">
                  Çıkış Yap
                </NavLink>
              </NavItem>
            </Nav>
          ) : (
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink to={"/login"} className="nav-link ms-2">
                  Giriş Yap
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={"/register"} className="nav-link ms-2">
                  Kayıt Ol
                </NavLink>
              </NavItem>
            </Nav>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    loginResponse: state.loginReducer,
    logoutResponse: state.logoutReducer,
    user: state.userReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      logout: bindActionCreators(authActions.logout, dispatch),
      getUser: bindActionCreators(userActions.getUser, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navi);
