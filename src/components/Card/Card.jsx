import './Card.scss';
import {FiMoreHorizontal} from "react-icons/fi";
import {BiTrendingUp} from "react-icons/bi";
import {FiTrendingDown} from "react-icons/fi";

const Card = (props) => {
  const data = props.cardData;

  const renderIcon = (status)=> {
    if(status === "decreased") {
      return <FiTrendingDown className='icon-trend'/>
    }
    else {
      return <BiTrendingUp className='icon-trend'/>
    }
  }
  return (
    <div className='container-card flex-row' >
      <div className="left flex-col card left-aligned-gap-1">
        <div className="icon">
             {data.cardIcon}
        </div>
        <div className="title">
          <p>{data.title}</p>
        </div>
        <div className="amount">
          <h1>{data.amount}</h1>
        </div>

       
        <div className="trend flex-row">
          <div className={`icon-2 ${data.status}`}>
           {renderIcon(data.status)}
          </div>
          <div className="desc">
              <p className={`${data.status}`}><span>{data.desc} </span>{data.date}</p>
          </div>
        </div>
      </div>
      <div className="right">
        <FiMoreHorizontal />
      </div>
    </div>
  )
}

export default Card