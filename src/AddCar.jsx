import React from 'react';
import useCars from "./hooks/Cars";

const AddCar = () => {
  const cars = useCars();
  return (
    <button onClick={e=>cars.addCar({
          manufacturer: 'Audi',
          name: 'R8 V10 Plus',
          power: 610,
          weight: 1670,
          acceleration: 3.2,
    })}>Add Car</button>
  )
}

export default AddCar;