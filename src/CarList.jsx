import React, {useState} from 'react';
import _ from 'lodash';

const CarList = (prop) => {
  const [sortCondition, setSortCondition] = useState({key:'power',asc:false});
  const order = sortCondition.asc ? 'asc' : 'desc';
  return (
    <table>
      <thead>
      <tr>
        <th onClick={e=>setSortCondition({key:'manufacturer',asc:true})}>
          Manufacturer
        </th>
        <th onClick={e=>setSortCondition({key:'name',asc:true})}>
          Name
        </th>
        <th onClick={e=>setSortCondition({key:'power',asc:false})}>
          Horsepower (ps)
        </th>
        <th onClick={e=>setSortCondition({key:'weight',asc:true})}>
          Weight (kg)
        </th>
        <th>
          Power Weight Ratio
        </th>
        <th onClick={e=>setSortCondition({key:'acceleration',asc:true})}>
          0-100km/h<br />Acceleration (sec.)
        </th>
      </tr>
      </thead>
      <tbody>
      {_.map(_.orderBy(prop.cars,sortCondition.key,order), (c, i) => (
        <tr key={i}>
          <td>{c.manufacturer}</td>
          <td>{c.name}</td>
          <td>{c.power}</td>
          <td>{c.weight !== 0 ? c.weight : '--'}</td>
          <td>{(c.weight !== 0 && c.power !== 0) ? (c.weight / c.power).toFixed(2) : '--'}</td>
          <td>{c.acceleration !== 0 ? c.acceleration : '--'}</td>
        </tr>)
      )}
      </tbody>
    </table>
  )
}

export default CarList;