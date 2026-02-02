import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Welcome to the Home Page");

  return (
    <div>
      <h2>Home Page</h2>
      <p>{message}</p>
      <button onClick={() => setMessage("You clicked the button!")}>
        Click Me
      </button>
    </div>
  );
}
