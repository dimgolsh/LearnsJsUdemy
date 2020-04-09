import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import { inc, dec, rnd } from "./actions";

const store = createStore(reducer);
const { dispatch } = store;

const {incDispacth,decDispacth,rndDispacth} = bindActionCreators(
  { incDispacth: inc, decDispacth: dec, rndDispacth: rnd },
  dispatch
);


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
