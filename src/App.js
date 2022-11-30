import {useState} from "react"

import {AiFillShop} from "react-icons/ai";
import {FcComboChart} from "react-icons/fc";
import { Card } from './components';
import './App.scss';

function App() {

  const [CardData, setCardData] = useState(
    {
      cardIcon:<AiFillShop className="card-icon"/>,
      title: 'Total shop',
      amount: '1500',
      trendIcon: <FcComboChart className='trend-icon'/>,
      desc:'last month',

    }
  );

  
  return (
    <div className="wrapper">
       <Card cardData={CardData}/>
    </div>
  );
}

export default App;
