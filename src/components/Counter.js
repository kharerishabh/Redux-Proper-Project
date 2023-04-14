import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const toggleCounterHandler = () => {};
  const incrementHandler = () => {
    dispatch({type: 'increment'})
  }
  const incrementBy5Handler = () => {
    dispatch({type: 'incrementby5'})
  }
  const decrementHandler = () => {
    dispatch({type: 'decrement'})
  }
  const decrementBy5Handler = () => {
    dispatch({type: 'decrementby5'})
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementBy5Handler}>Incrementby5</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={decrementBy5Handler}>decrementby5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
