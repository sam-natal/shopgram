import {useState} from "react"

import {AiFillShop} from "react-icons/ai";
import {MdSell} from "react-icons/md";
import {FaUsers} from "react-icons/fa";
import { DataGrid } from '@mui/x-data-grid';
import {CiSearch} from "react-icons/ci";
import {GiCash} from "react-icons/gi";


import {Card} from "../../components";
import './Dashboard.scss';

const Dashboard = () => {
    const [CardData, setCardData] = useState(
        [ {
           cardIcon:<AiFillShop className="card-icon"/>,
           title: 'Total shop',
           amount: '1500',
           desc:'1200',
           date: 'last month',
           status: 'increased'
     
         },
         {
           cardIcon:<MdSell className="card-icon"/>,
           title: 'Total sellers',
           amount: '1000',
           desc:'1200',
           date: 'last month',
           status: 'decreased'
         },
         {
           cardIcon:<FaUsers className="card-icon"/>,
           title: 'Total buyers',
           amount: '25000',
           desc:'1900',
           date: 'last month',
           status: 'increased'
         }]
       );

    const [Earning, setEarning] = useState({
      cardIcon:<GiCash className="card-icon"/>,
      title: 'Total earning',
      amount: '220500',
      desc:'220000',
      date: 'last month',
      status: 'increased'
    });

    const [Promoted, setPromoted] = useState({
      cardIcon:<AiFillShop className="card-icon"/>,
      title: 'Total promoted',
      amount: '3500',
      desc:'2000',
      date: 'last month',
      status: 'decreased'
    });
    const [Verified, setVerified] = useState({
      cardIcon:<AiFillShop className="card-icon"/>,
      title: 'Total verified',
      amount: '1500',
      desc:'1200',
      date: 'last month',
      status: 'increased'
    });

       const columns = [

        { field: 'reviewContent', headerName: 'What customer have said for the shop', width: 330 },
        { field: 'customerEmail', headerName: 'Customer email', width: 170 },
        {
          field: 'shopName',
          headerName: 'shop name',
          type: 'number',
          width: 110,
        }
      
      ];
      
      const rows = [
        { id: 1, reviewContent: 'Snow', customerEmail: 'Jon', shopName: 'HamytaBachan' },
        { id: 2, reviewContent: 'Lannister', customerEmail: 'Cersei', shopName: 42 },
        { id: 3, reviewContent: 'Lannister', customerEmail: 'Jaime', shopName: 45 },
        { id: 4, reviewContent: 'Stark', customerEmail: 'Arya', shopName: 16 },
        { id: 5, reviewContent: 'Targaryen', customerEmail: 'Daenerys', shopName: null },
    
      ];
  return (
    <section className="dashboard-section flex-col ">
     <div className="top-cards-container flex-row just-content-space-btwn">
         {CardData.map(data => (
           <Card cardData={data} key={data.title}/> 
         ))}
     </div>

     <div className="table-cards-bottom flex-row">

      <div className="table">
        <div className="header flex-row">
        <div className="title">
        <h4>Customer reviews table</h4>
      </div>
     <div className="search-container flex-row">
        <CiSearch className="search-icon"/>
          <input type="search" placeholder="search by shop name"/>
       </div>
        </div>

        <div style={{ height: 400, width: '100%', color: 'rgba(255, 255, 255, 0.8)' }}>
     
        
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            
          />
        </div>
      </div>

      <div className="cards">
           <Card cardData={Earning}/>

           <div className="flex-row pv-cards">
            <Card cardData={Promoted}/>
            <Card cardData={Verified}/>
           </div>
      </div>
   
     </div>
    </section>
  )
}

export default Dashboard