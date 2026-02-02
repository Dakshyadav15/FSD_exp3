import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Contact Page</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>{name && `Hello, ${name}! We will contact you soon.`}</p>
    </div>
  );
}
