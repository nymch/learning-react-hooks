import React, {useContext} from 'react';
import {CarsDispatch} from './containers/CarListContainer';
// import carsReducer from './hooks/CarsReducer';

const CarAddButton = () => {
  const dispatch = useContext(CarsDispatch)
  return (
    <button onClick={e=>dispatch({type:'ADD_CAR',payload:{
      manufacturer: 'Audi',
      name: 'R8 V10 Plus',
      power: 610,
      weight: 1670,
      acceleration: 3.2,
    }})}>Add Car</button>
  )
}

export default CarAddButton;