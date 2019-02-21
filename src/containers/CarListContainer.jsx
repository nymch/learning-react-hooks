import React, { useReducer } from 'react';
import carsReducer from '../reducers/CarsReducer';
import CarList from '../CarList';
import CarAddButton from '../CarAddButton';
import { SuperCars } from '../constants/SuperCars';

export const CarsDispatch = React.createContext(null);

const CarListContainer = () => {
  const [state, dispatch] = useReducer(carsReducer,{cars:SuperCars});
  return (
    <CarsDispatch.Provider value={dispatch}>
      <CarList cars={state.cars}/>
      <CarAddButton />
    </CarsDispatch.Provider>
  )
}

export default CarListContainer;