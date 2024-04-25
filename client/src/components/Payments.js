import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { addCredits } from '../reducers/authReducer';

export default function Payments() {
    const dispatch = useDispatch();

    function tokenHandler(token) {
        dispatch(addCredits(token));
    }

    return (
        <StripeCheckout
            name="Emaily"
            description="$5 for 5 email credits"
            image="https://upload.wikimedia.org/wikipedia/commons/7/77/Avatar_cat.png"
            amount={500}
            panelLabel="Pay up $5"
            token={tokenHandler}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}>
            <button className="btn" style={{ backgroundColor: '#ffa500' }}>Add Credits</button>
        </StripeCheckout>
    );
}
