import React, {useContext} from 'react';
import {CarsDispatch} from './containers/CarListContainer';
import CarsService from './services/CarsService';

const CarAddButton = () => {
  const dispatch = useContext(CarsDispatch);
  return (
    <button onClick={()=>CarsService.getCar().then(car => dispatch({type:'ADD_CAR',payload:car}))}>Add Car</button>
  )
}

export default CarAddButton;