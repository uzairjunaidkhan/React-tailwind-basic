import { useState } from "react";

function Counter(){
        //[variable, function]
    let [counter, setCounter] = useState(11)

    // let counter = 11;
    function addValue(){
        if(counter>=20){
            setCounter(20);
            return
        }
        ++counter;
        setCounter(counter)
        console.log(counter)
    }
    function subValue(){
        if(counter<=0){
            setCounter(0);
            return
        }
        setCounter(--counter)
        console.log(counter)
    }

    return(
        <>
        <h1>Counter {counter}</h1>
        
        <button onClick={addValue}>Add</button>
        <button onClick={subValue}>Sub</button>
        </>
    )
}

export default Counter;