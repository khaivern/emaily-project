import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { addCredits } from '../reducers/authReducer';

export default function Payments({credits}) {
    const dispatch = useDispatch();

    function tokenHandler(token) {
        dispatch(addCredits(token));
    }

    return (
        <StripeCheckout
            name="Emaily"
            description="Meow gimme credits..."
            image="https://upload.wikimedia.org/wikipedia/commons/7/77/Avatar_cat.png"
            amount={500}
            panelLabel="5 credits for "
            token={tokenHandler}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}>
            <button className="btn amber darken-3">Credits: {credits}</button>
        </StripeCheckout>
    );
}
