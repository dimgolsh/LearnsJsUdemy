import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import * as actions from "./actions";

const store = createStore(reducer);
const { dispatch } = store;

const { inc, dec, rnd } = bindActionCreators(actions,dispatch);

document.getElementById("dec").addEventListener("click", inc);
document.getElementById("inc").addEventListener("click", dec);
document.getElementById("rnd").addEventListener("click", () => {
  const value = Math.floor(Math.random() * 10);
  rnd(value);
});

const update = () => {
  document.getElementById("counter").textContent = store.getState();
};

store.subscribe(update);
