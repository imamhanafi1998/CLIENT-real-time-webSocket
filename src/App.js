import React, { useState, useEffect } from 'react';
import ClientComponent from "./ClientComponent"

function App() {
  const [loadClient, setLoadClient] = useState(true)

  useEffect(() => {
    console.log(process.env.BACKEND_ENDPOINT);
  }, [])

  return (
    <>
      <button onClick={() => {setLoadClient(prevState => !prevState)}}>
        START/STOP CLIENT
      </button>
      {loadClient ? <ClientComponent /> : null}
    </>
  );
}

export default App;
