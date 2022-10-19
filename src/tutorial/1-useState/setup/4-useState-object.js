import React, { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson] = useState({name:"shalini",age:26,message:"random message"});
  const [name,setName] = useState('shalini');
  const [age,setAge] = useState(26);
  const [message,setMessage] = useState('Random message');

  const changeMessage = () =>{
    setMessage("Message changed")
  }
  return (<>
  <h3>{name}</h3>
  <h3>{age}</h3>
  <h3>{message}</h3>
  <button className="btn" onClick={changeMessage}>Change message</button>
  </>);
};

export default UseStateObject;
