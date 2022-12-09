import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import Loading from '../../Shared/Loading/Loading';

const stripePromise = loadStripe(process.env.REACT_APP_STRIP_PK)



const Payment = () => {
    const booking = useLoaderData()
    const navigation = useNavigation()
    console.log('booking data', booking);

    const { treatment, price, slot, appointmentDate } = booking;

    if (navigation.state === 'loading') {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className="text-3xl">Payment for{treatment}</h3>
            <p className="text-xl">Please pay ${price} for your appointment on {appointmentDate} at {slot} </p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;