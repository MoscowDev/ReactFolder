import React from "react";
import style from "./counter.module.css"
import {increment, decrement, reset } from '../slices/counterSlice';
import{useSelector, useDispatch} from 'react-redux';

const Counter =() => {
    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch();

    return(
        
        <div className={style.wrapper}>
            <span>{count}</span>
            <button onClick = {()=>dispatch(increment())}>+</button>
            <button onClick = {()=>dispatch(decrement())}>-</button>
            <button className= {style.dom} onClick = {()=>dispatch(reset())}>Reset</button>
        </div>
    )
}

export default Counter;