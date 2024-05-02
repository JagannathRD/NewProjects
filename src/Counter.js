import { useState } from "react";

const Counter=()=>{
    const[counter, setCounter]= useState(0)

    const callCount=()=>{
        setCounter(counter+1)
    }
return(
    <>
    <br></br>
    Count = {counter}
    <br></br>
    <button onClick={()=>setCounter((e)=>e+1)}>Increment</button>
    <br></br>
    <button onClick={()=>setCounter((e)=>e+-1)}>Decrement</button>

    </>
)

    }

export default Counter;