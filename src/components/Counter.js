import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseValue, increaseValue, resetValue } from '../redux/Actions';
import "../styles/App.css";

const Counter = () => {
    const {count} = useSelector(state=>state.counterReducer);
    const dispatch = useDispatch();
    const data = useSelector(state=>state.inputReducer);
    console.log(data);
    return (
        <>
        <div className='counterHolder'>
            <p><button className='cntBtn' onClick={()=>{dispatch(increaseValue())}}>INCREMENT</button></p>
            <p className='actualCount'>Count is <span id='count'>{count}</span></p>
            <div className='resetHolder'>
            <p><button className='cntBtn' onClick={()=>{dispatch(decreaseValue())}}>DECREMENT</button></p>
            <p>
            <button className='cntBtn' onClick={()=>{dispatch(resetValue())}}>RESET</button></p>
            </div>
        </div>
    </>
  )
}

export default Counter