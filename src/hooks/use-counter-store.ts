import counterSlice from "@/redux/features/counter-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function useCounterStore() {
  const { count } = useAppSelector(s => s.counter);
  const { decrement, increment, decrementBy, incrementBy, resetCount } = counterSlice.actions;
  const dispatch = useAppDispatch();

  return {
    count,
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    incrementBy: (value: number) => dispatch(incrementBy(value)),
    decrementBy: (value: number) => dispatch(decrementBy(value)),
    resetCount: () => dispatch(resetCount()),
  };
}
