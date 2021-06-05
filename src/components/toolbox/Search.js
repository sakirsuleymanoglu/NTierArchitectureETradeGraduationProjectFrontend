import React, { Component } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as searchActions from "../../redux/actions/searchActions";

class Search extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };

  changeInputValue = (e) => {
    this.props.actions.changeValue(e.target.value);
  };

  render() {
    this.props.actions.getProducts({
      searchProductNameValue: this.props.searchValue,
    });

    return (
      <div>
        <Form className="mt-4" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Input
              type="search"
              name="search"
              placeholder="Ürün Ara"
              onChange={this.changeInputValue}
            ></Input>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchValue: state.searchProductReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      changeValue: bindActionCreators(searchActions.changeValue, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
