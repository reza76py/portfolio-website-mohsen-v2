import { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/message/')
    .then((response) => {
      setMessage(response.data.message);
    });
  }, []);
  return (
    <div>
      <h1>this is fromDJ: {message}</h1>
    </div>
  )
  
}

export default App;