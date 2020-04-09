import {createStore} from 'redux';
import reduce from './reducer';
import {inc,dec,res} from './actions';




const store = {
  value: 0,
  subscribeF: null,
  getState() {
    return this.value;
  },
  subscribe(subscribeF) {
    return subscribeF();
  },
  dispatch(func) {
     this.value = reduce(this.value,func);
     this.subscribe(this.subscribeF);

  },
};


const reduxStore = new createStore(reduce);
const {dispatch} = store;



document.getElementById("inc").addEventListener("click", () => {
 // store.dispatch(dec());
  reduxStore.dispatch(dec());
});
document.getElementById("res").addEventListener("click", () => {
  const value = 0;
 // store.dispatch(res());
  reduxStore.dispatch(res());
});
document.getElementById("dec").addEventListener("click", () => {
 // store.dispatch(inc());
  reduxStore.dispatch(inc());
});

const update = () => {
 // document.getElementById("counter").textContent = store.getState();
  document.getElementById("counter").textContent = reduxStore.getState();
};


store.subscribeF = update;

reduxStore.subscribe(update);

//store.dispatch({ type: "INC" });
//store.dispatch({ type: "INC" });
//store.dispatch({ type: "INC" });
