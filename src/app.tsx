import type { FC } from "react";

import useCounterStore from "@/hooks/use-counter-store";

const App: FC = () => {
  const { count, increment, decrement } = useCounterStore();

  return (
    <main>
      <div>{count}</div>
      <div>
        <button type="button" onClick={increment}>Increment</button>
        <button type="button" onClick={decrement}>Decrement</button>
      </div>
    </main>
  );
};

export default App;
