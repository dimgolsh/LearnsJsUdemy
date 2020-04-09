import { createStore } from "redux";
import reducer from "./reducer";
import { inc, dec, rnd } from "./actions";

const store = createStore(reducer);
const { dispatch } = store;

const bindActionCreator = (creator, dispatch) => (...args) => {
  dispatch(creator(...args));
};
const incDispacth =  bindActionCreator(inc,dispatch);
const decDispacth =  bindActionCreator(dec,dispatch);
const rndDispacth =  bindActionCreator(rnd,dispatch);

document.getElementById("dec").addEventListener("click", incDispacth);
document.getElementById("inc").addEventListener("click", decDispacth);
document.getElementById("rnd").addEventListener("click", () => {
  const value = Math.floor(Math.random() * 10);
  rndDispacth(value);
});

const update = () => {
  document.getElementById("counter").textContent = store.getState();
};

store.subscribe(update);
