import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";

import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../../redux/actions/authActions";
import * as userActions from "../../redux/actions/userActions";
import * as basketActions from "../../redux/actions/basketActions";

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
        <NavbarBrand className="ms-4">MARMARA MARKET</NavbarBrand>
        <NavbarToggler className="me-2" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {localStorage.getItem("jwtToken") ? (
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink to={"/"} className="nav-link ms-4">
                  Anasayfa
                </NavLink>
              </NavItem>
              {props.user.firstName !== undefined &&
              props.user.lastName !== undefined ? (
                <NavItem>
                  <NavLink
                    to={"/user/" + props.user.id + "/profile"}
                    className="nav-link ms-4"
                  >
                    {props.user.firstName + " " + props.user.lastName}
                  </NavLink>
                </NavItem>
              ) : null}
              <NavItem>
                <NavLink
                  to={`/user/${props.user.id}/basket`}
                  className="nav-link ms-4"
                >
                  Sepetim
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={logout} to={"/"} className="nav-link ms-4">
                  Çıkış Yap
                </NavLink>
              </NavItem>
            </Nav>
          ) : (
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink to={"/"} className="nav-link ms-4">
                  Anasayfa
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={"/login"} className="nav-link ms-4">
                  Giriş Yap
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={"/register"} className="nav-link ms-4">
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
