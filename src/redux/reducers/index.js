import { combineReducers } from "redux";
import changeCategoryReducer from "./categoryReducers/changeCategoryReducer";
import categoryListReducer from "./categoryReducers/categoryListReducer";
import productListReducer from "./productReducers/productListReducer";
import brandListReducer from "./brandReducers/brandListReducer";
import changeBrandReducer from "./brandReducers/changeBrandReducer";
import changePriceReducer from "./priceReducers/changePriceReducer";
import searchProductReducer from "./productReducers/searchProductReducer";
import productWithDetailsReducer from "./productReducers/productWithDetailsReducer";
import productImagesReducer from "./productReducers/productImagesReducer";
import changeImageReducer from "./productReducers/changeImageReducer";
import imageByIdReducer from "./productReducers/imageByIdReducer";
import firstImageByProductReducer from "./productReducers/firstImageByProductReducer";
import registerReducer from "./authReducers/registerReducer";
import loginReducer from "./authReducers/loginReducer";
import logoutReducer from "./authReducers/logoutReducer";
import userReducer from "./userReducers/userReducer";
import getBasketReducer from "./basketReducers/getBasketReducer"
import addOrDeleteReducer from "./basketReducers/addOrDeleteReducer"
import getTotalPriceReducer from "./basketReducers/getTotalPriceReducer"

const rootReducer = combineReducers({
  changeCategoryReducer,
  categoryListReducer,
  productListReducer,
  brandListReducer,
  changeBrandReducer,
  changePriceReducer,
  searchProductReducer,
  productWithDetailsReducer,
  productImagesReducer,
  changeImageReducer,
  imageByIdReducer,
  firstImageByProductReducer,
  registerReducer,
  loginReducer,
  logoutReducer,
  userReducer,
  getBasketReducer,
  addOrDeleteReducer,
  getTotalPriceReducer
});

export default rootReducer;
