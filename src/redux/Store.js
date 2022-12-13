import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./RootReducer";

const myStore = createStore(rootReducer,applyMiddleware(thunk));
export default myStore;