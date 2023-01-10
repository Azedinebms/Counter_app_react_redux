import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { DECREMENT, INCREMENT } from "../action/Type";
function Counter() {

    const countStat = useSelector(state => state.count)
    const dispatch = useDispatch();


    const handelIncrement = () => { 
        //setCount(count + 1); 
        dispatch({
            type : INCREMENT
        })
    }

    const handelDecrement = () => { 
       // setCount(count - 1); 
       dispatch({
        type : DECREMENT
    })
    }


    return (
        <div>
            <p>{countStat}</p>
            <button onClick={handelIncrement}>+</button><button onClick={handelDecrement}>-</button>
        </div>
    )



}

export default Counter