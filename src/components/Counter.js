import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';
// import { INCREMENT } from '../store/index';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showCounter)

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }
  const incrementBy5Handler = () => {
    dispatch(counterActions.increase(5)) // {type: SOME_UNIQUE_IDENTIFIER, PAYLOAD: 5}
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }
  const decrementBy5Handler = () => {
    dispatch(counterActions.decrease(5)) // {type: SOME_UNIQUE_IDENTIFIER, PAYLOAD: 5}
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
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
