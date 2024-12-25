import React , { useState, useEffect }from 'react';
import axios from 'axios';

const Home = () => {
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

    const handlePlayPause = (index) => {
      const audioElement = document.getElementById(`audio-${index}`);
      if (audioElement.paused) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    };
  
    return (
      <div>
        <h1>Audio Files</h1>
        <ul>
          {audioFiles.map((audio, index) => (
            <li key={index}>
              <img
                className='audio-image'
                src={audio.image}
                alt={audio.title}
                style={{ cursor: "pointer", width: "200px", height: "200px" }}
                onClick={() => handlePlayPause(index)}
              />
              <audio id={`audio-${index}`} style={{ display: "none" }}>
                <source src={audio.url} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default Home;