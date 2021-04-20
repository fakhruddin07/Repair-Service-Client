import React from 'react';
import { Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51Ie3hBLNb3swcAis7v2bLsWxCd2dwNXfBoypAUnjXxz9N0ZBZuTFxaFrJIkRaAiY4TBSgTBYvL933SLTU5f0Mwb500wKbTuKxv');

const StripePayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment}/>
        </Elements>
    );
};

export default StripePayment;