import React, { useState } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Crashed car count.</h1>
      {
        count > 0 ?
          <p>Your have crashed {count} time{count > 1 && 's'}.</p> :
          <p>You haven't crashed yet.</p>
      }
      <button onClick={e=>setCount(count + 1)}>I need more traffic collision</button>
    </>
  )
}

export default Count;