import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import {ProductReducer} from './modules/Products/reducer'
import { TotalReducer } from "./modules/Total/reducer";

const reducers = combineReducers({products: ProductReducer, total: TotalReducer})

const store = createStore(reducers, applyMiddleware(thunk))

export default store