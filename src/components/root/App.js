import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import Footer from "../footer/Footer";
import Product from "../products/Product";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../login/Login";
import Register from "../register/Register";
import User from "../user/User";

function App(props) {
  return (
    <div>
      <Navi></Navi>
      <Container>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/products/:id" component={Product}></Route>
          <Route path="/user/:id/profile" component={User}></Route>

          {!localStorage.getItem("jwtToken") ? (
            <Route path="/register" component={Register}></Route>
          ) : (
            <Redirect to="/"></Redirect>
          )}

          {!localStorage.getItem("jwtToken") ? (
            <Route path="/login" component={Login}></Route>
          ) : (
            <Redirect to="/"></Redirect>
          )}
        </Switch>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
