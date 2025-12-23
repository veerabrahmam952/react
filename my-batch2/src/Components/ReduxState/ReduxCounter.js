import { incrementByAmount, reset } from "./StateService"
import { useSelector, useDispatch } from "react-redux"

function CounterView() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return(
        <>
        <h1>Counter View: {count}</h1>
        <button onClick={() => dispatch(incrementByAmount(3))}>Increment By Amount 3</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        </>
    )
}

export default CounterView