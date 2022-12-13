import { combineReducers } from "redux";
import { counterReducer, inputReducer } from "./Reducer";


const rootReducer = combineReducers({counterReducer:counterReducer});
export default rootReducer;