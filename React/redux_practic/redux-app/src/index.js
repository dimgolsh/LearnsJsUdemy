const initalState = 0;

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
      break;

    default:
      return state;
  }
};

let state = reducer(undefined, {});

state = reducer(state, { type: "INC" });
console.log(state);
state = reducer(state, { type: "INC" });
console.log(state);
