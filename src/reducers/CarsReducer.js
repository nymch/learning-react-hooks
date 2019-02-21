const carsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CAR': {
      return {cars:[...state.cars,action.payload]};
    }
    default: {
      return state;
    }
  }
}

export default carsReducer;