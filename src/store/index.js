import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { headerInfo, loginReducer } from "./modules/Login/reducer";
import {ProductFilter, ProductReducer} from './modules/Products/reducer'
import { TotalReducer } from "./modules/Total/reducer";
import { userReducer } from "./modules/User/reducer";

const reducers = combineReducers({products: ProductReducer, total: TotalReducer, filteredProducts: ProductFilter, user: userReducer, login: loginReducer, headerInfo: headerInfo})

const store = createStore(reducers, applyMiddleware(thunk))

export default store