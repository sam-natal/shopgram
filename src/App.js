import {useState} from "react"

import {AiFillShop} from "react-icons/ai";
import {FcComboChart} from "react-icons/fc";
import {MdSell} from "react-icons/md";
import {FaUsers} from "react-icons/fa";
import { Card } from './components';
import './App.scss';

function App() {

  const [CardData, setCardData] = useState(
   [ {
      cardIcon:<AiFillShop className="card-icon"/>,
      title: 'Total shop',
      amount: '1500',
      trendIcon: <FcComboChart className='trend-icon'/>,
      desc:'last month',

    },
    {
      cardIcon:<MdSell className="card-icon"/>,
      title: 'Total sellers',
      amount: '1000',
      trendIcon: <FcComboChart className='trend-icon'/>,
      desc:'last month',
    },
    {
      cardIcon:<FaUsers className="card-icon"/>,
      title: 'Total buyers',
      amount: '2000',
      trendIcon: <FcComboChart className='trend-icon'/>,
      desc:'last month',
    }]
  );

  
  return (
    <div className="wrapper flex-row just-content-space-btwn">
      {CardData.map(data => (
      <Card cardData={data}/>
      )
      )}
       
    </div>
  );
}

export default App;
