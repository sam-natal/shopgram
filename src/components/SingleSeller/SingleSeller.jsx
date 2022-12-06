import './SingleSeller.scss';
import { icons, profile} from '../../constants'

const SingleSeller = () => {
  return (
   <section className="seller">
      <div className="seller-wrapper">
        <div className="content-wrapper flex-col">
            <div className="seller-content flex-row">
                <div className="left">
                    <div className="p-image">
                        <img src={profile.seller01} alt="p-img" />
                    </div>
                </div>

                <div className="right flex-col">

                    <div className="p-data-cntner flex-row">
                        <div className="p-data flex-col">
                            <p>Seller name goes here</p>
                            <p>0789645321</p>
                            <p>seller3@gmail.com</p>
                        </div>

                        <div className="p-verification">
                            <img src={icons.verify} alt="" className='icon'/>
                        </div>
                    </div>

                    <div className="sos-wrapper flex-col">
                        <div className="shop-details flex-row">
                            <h4>Total shop</h4>
                            <h2>4</h2>
                        </div>
                        <div className="order-details flex-row">
                            <h4>Total orders</h4>
                            <h2>200</h2>
                            <small>from all 4 shops</small>
                        </div>
                        <div className="sale-details flex-row">
                            <h4>Total sales</h4>
                            <h2>2000000</h2>
                            <small>from all 4 shops</small>
                        </div>
                    </div>

                    <div className="btn-wrapper flex-row">
                        <button className='freeze-btn'>Freeze account</button>
                        <button className="verify-btn">Verify account</button>
                    </div>
            </div>
             

               
            </div>

         
        </div>
      </div>
   </section>
  )
}

export default SingleSeller