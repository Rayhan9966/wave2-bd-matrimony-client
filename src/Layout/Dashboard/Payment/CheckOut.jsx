import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const CheckOut = () => {
    const stripe=useStripe();
    const elements=useElements();

    const handleSubmit=async (event)=>{
        <event className="preventDefault"></event>();
        
    if (!stripe || !elements) {
      
        return;
      }
      const card =elements.getElement(CardElement)
      if(card ===null)
        return;
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-sm btn-success bg-violet-200 mt-2' type="submit" disabled={!stripe}>
          Pay
        </button>
            </form>
        </div>
    );
};

export default CheckOut;