import StripeCheckout from "react-stripe-checkout";

const Checkout=()=>{

    const onToken=(token)=>{
        console.log(token);
    }
    return(
        <>
        <div className="container">
            <StripeCheckout
                token={onToken}
                name="Urban Stay"
                currency="Inr"
                amount="100000"
                //Stripe Key
                stripeKey="pk_test_51Mj623SAjlvgCoYxOeDUImAQR9PXnx5U1kc8HlhpTaDP1ykZWFpH3MEDLY8VXZ5HySC4MbmVC71tOVPIMFv1zBMR00dvXhOsjO"
            />
        </div>
        </>
    )
}

export default Checkout;