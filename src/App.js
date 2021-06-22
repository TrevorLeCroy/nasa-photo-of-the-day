import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";
import Card from './Components/Card';

// API Key: zY65jIfdFMa7dyQunYACdEe51POuPvZQ4YU6L9pP
 function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?count=5&thumbs=true&api_key=zY65jIfdFMa7dyQunYACdEe51POuPvZQ4YU6L9pP')
        .then((res) => {
            console.log(res);
            setNasaData(res.data);
          })
        .catch((err) => {
          console.log('Error Recieving Data');
        });
  }, []);

  return (
    <div className="App">
      <h1> Astronomy Photos of the Day </h1>
      <div className='card-holder'> 
      {
      nasaData.map((data) => {
          return <Card data={data} key={data.url}/>
        })
      }
      </div>
    </div>
  );
}

export default App;