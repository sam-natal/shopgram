import './Card.scss';
import {FiMoreHorizontal} from "react-icons/fi";
const Card = (props) => {
  const data = props.cardData;
  return (
    <div className='container-card flex-row'>
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
          <div className="icon-2">
           {data.trendIcon}
          </div>
          <div className="desc">
              <p className="">{data.desc}</p>
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