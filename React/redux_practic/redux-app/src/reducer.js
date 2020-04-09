
const reducer = (state = 0, action) => {
    switch (action.type) {
      case "INC":
        return state + 1;
        break;
  
      case 'DEC':
      return state -1;
      break;
  
      case 'RND':
        return state + action.value
      default:
        return state;
    }
  };

  export default reducer;