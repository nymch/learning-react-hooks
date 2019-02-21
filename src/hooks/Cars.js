import { useState } from 'react';

function useCars(defaultCars) {
  const [cars, setCars] = useState(defaultCars);

  const addCar = car => {
    return setCars([...cars,car]);
  }

  return {cars:cars,addCar:addCar};
}

export default useCars;