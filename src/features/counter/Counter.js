import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <div>{count}</div>
        <button className={styles.button} onClick={() => dispatch(increment())}>
          +
        </button>
        <button className={styles.button} onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
