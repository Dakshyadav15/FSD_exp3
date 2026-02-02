import { useState } from "react";

export default function Dashboard() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Counter Value: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}
