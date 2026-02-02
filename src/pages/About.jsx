import { useState } from "react";

export default function About() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>About Page</h2>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Info" : "Show Info"}
      </button>

      {show && (
        <p>
          This Single Page Application is built using React Router and Vite.
        </p>
      )}
    </div>
  );
}
