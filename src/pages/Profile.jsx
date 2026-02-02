import { useState } from "react";

export default function Profile() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <h2>Profile Page</h2>

      {loggedIn ? (
        <>
          <p>Status: Logged In</p>
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        </>
      ) : (
        <>
          <p>Status: Logged Out</p>
          <button onClick={() => setLoggedIn(true)}>Login</button>
        </>
      )}
    </div>
  );
}
