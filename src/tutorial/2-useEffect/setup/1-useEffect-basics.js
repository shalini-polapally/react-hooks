import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value,setValue] = useState(0);
  const [val,setVal] = useState(0);
    useEffect(()=>{
      console.log('call useEffect');
      if(value>1){
        document.title = `New Messages(${value})`;
      }
    },[value])
  return (
    <>
    <h1>{value}</h1>
    <button className="btn" onClick={()=> setValue(value+1)}>
      Click Me!
    </button>
    <button className="btn" onClick={()=> setVal(val+1)}>
      Click Me Not
    </button>
    </>
  );
};

export default UseEffectBasics;
