import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";
import Card from './Components/Card';
import IncrementButton from "./Components/IncrementButton";
import styled from "styled-components";

const CardHolder = styled.div`
    margin: 0px auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`;

const IncrementButtonHolder = styled.div`
  margin-bottom: 20px;
`;

// API Key: zY65jIfdFMa7dyQunYACdEe51POuPvZQ4YU6L9pP
 function App() {
  const [nasaData, setNasaData] = useState([]);
  const [numOfCards, setNumOfCards] = useState(6);

  const updateNumOfCards = (amount) => {
    setNumOfCards(() => {
      if(numOfCards > 0) {
        console.log(numOfCards + amount);
        return numOfCards + amount;
      } else {
        return amount = 1;
      }
    });
  }

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?count=${numOfCards}&thumbs=true&api_key=zY65jIfdFMa7dyQunYACdEe51POuPvZQ4YU6L9pP`)
        .then((res) => {
            console.log(res);
            setNasaData(res.data);
          })
        .catch((err) => {
          console.log('Error Recieving Data');
        });
  }, [numOfCards]);

  return (
    <div className="App">
      <h1> Astronomy Photos of the Day </h1>
      <IncrementButtonHolder>
        <IncrementButton value={-1} changeNum={updateNumOfCards}/>
        <IncrementButton value={ 1} changeNum={updateNumOfCards}/>
      </IncrementButtonHolder>
      <CardHolder> 
      {
      nasaData.map((data) => {
          return <Card data={data} key={data.url}/>
        })
      }
      </CardHolder>
    </div>
  );
}

export default App;