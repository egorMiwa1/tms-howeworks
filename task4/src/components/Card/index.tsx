import {FunctionComponent} from 'react';
import  './Card.css'


export const Card:FunctionComponent<{cardData:CardData}> = function({cardData}){
  return (
    // <div style={{'border':'1px solid black'}}>
    //   <h1 style={{'textAlign':'center'}}>{cardData.title}</h1>
    //   <img style={{'width':'150px'}} src={cardData.image} alt={cardData.title} />
    //   <p style={{'textAlign':'center'}}>{cardData.text}</p>
    // </div>
    <div className="card">
    <img className='cardImg' src={cardData.image} alt={cardData.title} style={{'width':'100%'}}/>
    <div className="container">
      <h4><b>{cardData.title}</b></h4>
      <p>{cardData.text}</p>
    </div>
  </div>
  );
};







