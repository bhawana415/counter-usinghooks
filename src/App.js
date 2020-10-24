import React, { useState } from 'react';  

//we are increment the count it is not increase 
//in functional compoenent thats why we used class compoenent or hooks 
/*let count=1;
const IncNum=()=>{

  count++;
}*/


const App=()=> {
  const state =useState();
  const[count,setCount]=useState(0);
  const IncNum=()=>{
    setCount(count+1);
  };
  const DreNum=()=>{
    setCount(count-1);
  }
  
  return (
 <>
 <h1>{count}</h1>
 <button onClick={IncNum}>Increment</button>
 <button onClick={DreNum}>Decrement</button>
 </>
  );
}

export default App;
