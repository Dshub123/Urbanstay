import axios from "axios";
import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import config from "../../../config";
import "./searchItem.css";




const SearchItem = () => {

  const [state, setState] = useState([])

  const cards = () => {
    axios.get(config.serverURL + '/urbanstay/allhostels').then(res => {

      setState(res.data)

    }).catch(err => {
      console.log(err);
    })
  }



  useEffect(() => {
    cards()
  }, [])
  return (

    <>

      {

        state.map(prop => {
          return (

            <div className="searchItem">
              <img
                src={prop.image}
                alt=""
                className="siImg"
              />
              <div className="siDesc">
                <h1 className="siTitle">{prop.hostel_name}</h1>
                <span className="siDistance">{prop.address}</span>
                <span className="siSubtitle">
                  {prop.facilities}
                </span>
                <span className="siSubtitle">
                  {prop.rules}
                </span>

                <span className="siFeatures">
                  Entire Room• 1 bathroom • 19m² 1 full bed
                </span>
                {/* <span className="siCancelOp">Free cancellation </span> */}
                {/* <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span> */}


              </div>
              {prop.rooms.map(props => {

                return (

                  <div className="siDetails">
                    <div className="siRating">
                      <span>{props.bed_share}</span>
                      <button>8.9</button>
                    </div>
                    <div className="siDetailTexts">
                      <span className="siPrice">{props.rent}</span>
                      <span className="siTaxOp">{props.deposite}</span>
                      <StripeCheckout
                        token={(token) => {
                          console.log(token)
                        }}
                        name={prop.hostel_name}
                        currency="Inr"
                        amount={(props.rent + props.deposite) * 100}
                        //Stripe Key
                        stripeKey="pk_test_51Mj623SAjlvgCoYxOeDUImAQR9PXnx5U1kc8HlhpTaDP1ykZWFpH3MEDLY8VXZ5HySC4MbmVC71tOVPIMFv1zBMR00dvXhOsjO"
                      >
                        <button className="siCheckButton">Buy Now</button></StripeCheckout>
                    </div>
                  </div>
                )
              })}

            </div>
          )
        })
      }

    </>


  );

};


export default SearchItem;
