import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState('');
  const [audioFiles, setAudioFiles] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/message/')
      .then((response) => {
        setMessage(response.data.message);
      });

    axios.get('http://127.0.0.1:8000/api/audio/')
      .then((response) => {
        setAudioFiles(response.data);
      });
  }, []);

  return (
    <div>
      <h1>this is fromDJ: {message}</h1>
      <h2>Audio Files:</h2>
      <ul>
        {audioFiles.map((audio, index) => (
          <li key={index}>
            <p>{audio.title}</p>
            <audio controls>
              <source src={audio.url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
