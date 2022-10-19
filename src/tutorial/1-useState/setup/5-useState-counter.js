import React, { useState } from 'react';

const UseStateCounter = () => {
  const [count,setCount] = useState(0);

  const complexIncrease = () =>{
    setTimeout(()=>{
      setCount((prevState)=>{return prevState+1})
    },2000)
  }
  return <>
  <section style={{margin:'4rem 0'}}>
    <h2>Regular counter</h2>
    <h1>{count}</h1>
    <button className="btn" onClick={()=>{setCount(count-1)}}>Dec</button>
    <button className="btn" onClick={()=>{setCount(0)}}>reset</button>
    <button className="btn" onClick={()=>{setCount(count+1)}}>Inc</button>
  </section>
  <section style={{margin:'4rem 0'}}>
    <h2>More Regular counter</h2>
    <h1>{count}</h1>
    <button className="btn" onClick={complexIncrease}>Increase later</button>
  </section>
  </>
};

export default UseStateCounter;
