import reducers from "./reducers/index.js";
import { legacy_createStore as createStore } from "redux";

const store = createStore(reducers, {});

export default store;
