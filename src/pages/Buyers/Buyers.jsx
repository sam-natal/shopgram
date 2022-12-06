import { useState } from 'react';
import {FaUsers} from "react-icons/fa";
import {Card} from '../../components';
import './Buyers.scss';


const Buyers = () => {

    const [BuyersData, SetBuyersData] = useState([
        {
           cardIcon:<FaUsers className="card-icon"/>,
           title: 'Total Buyers',
           amount: '15000',
           desc:'120000',
           date: 'last month',
           status: 'decreased'
        },
        {
           cardIcon:<FaUsers className="card-icon"/>,
           title: 'Total active buyers per month',
           amount: '15000',
           desc:'10000',
           date: 'last month',
           status: 'increased'
        },

    ])
  return (
    <section className="buyers">
        <div className="top flex-row">
            {BuyersData.map(data => (
                <Card cardData={data}/>
            ))}
              
        </div>

        <div className="bottom">
            <div className="trnd-tbl flex-row">

            </div>
        </div>
    </section>
  )
}

export default Buyers