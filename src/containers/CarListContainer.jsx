import React, { useReducer } from 'react';
import carsReducer from '../reducers/CarsReducer';
import CarList from '../CarList';
import CarAddButton from '../CarAddButton';

export const CarsDispatch = React.createContext(null);

const CarListContainer = () => {
  const [carsState, dispatch] = useReducer(carsReducer,{cars:[]});
  const {cars} = carsState;
  return (
    <CarsDispatch.Provider value={dispatch}>
      <CarAddButton />
      <CarList cars={cars} />
    </CarsDispatch.Provider>
  )
}

export default CarListContainer;