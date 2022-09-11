import {useState} from 'react';
import { Card } from '../Card';
import { getRandomInformation } from '../getInformationFromApi';
  


export const CardList = () => {
  const [cardData, setCardData] = useState<CardData[]>([]);
  const getData = async (event:any)=> {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const result = await getRandomInformation(randomNumber);
    setCardData((oldState)=> [...oldState, result]);
  }
    return (
      <>
      <button onClick={getData}>GET DATA</button>
      <div style={{'display':'flex', 'flexWrap':'wrap'}}>
        {cardData.map((item: CardData) => {
          return (
            <Card cardData={item} key={item.id} />);
        })}
      </div>
      <button onClick={getData}>GET DATA</button>
      </>
    );
};


