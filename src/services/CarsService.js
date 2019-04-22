import { SuperCars } from "../constants/SuperCars";
import _ from 'lodash';

const getCar = () => {
  const id = _.random(0,SuperCars.length-1);
  return new Promise(resolve => {setTimeout(()=>resolve(SuperCars[id]),1000)});
}

const CarsService = {
  getCar,
}

export default CarsService;