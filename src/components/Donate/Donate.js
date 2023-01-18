// IFFAT NUR SHAD 

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



const Donate = () => {
    const [amountFromButton, setAmountFromButton] = useState(0);

    const stripe = useStripe();
    const elements = useElements();
    const [secret, setSecret] = useState('');
    const [paymentError, setPaymentError] = useState("");
    const [success, setSuccess] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    const navigate = useNavigate();

    const handleAmountValue = (amount) => {
      setAmountFromButton(amount);
    };
    useEffect(() => {
      if (amountFromButton > 0) {
        fetch("http://localhost:5000/create-payment-intent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amountFromButton: parseInt(amountFromButton),
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            setSecret(data.clientSecret);
          });
      }
    }, [amountFromButton]);
    const handleSubmit = async (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const phone = form.phone.value;
      if (!stripe || !elements) {
        return;
      }

      const card = elements.getElement(CardElement);
      if (card === null) {
        return;
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });

      if (error) {
        console.log(error);
        setPaymentError(error);
      } else {
        setPaymentError("");
      }

      setSuccess("");
      setProcessing(true);
      
      console.log(secret);
      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(secret, {
          payment_method: {
            card: card,
            billing_details: {
              name,
              email,
              phone
            },
          },
        });

      if (confirmError) {
        setPaymentError(confirmError.message);
        return;
      }

      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent?.id);
        const donorInfo = {
          name,
          email,
          amount: amountFromButton,
          transaction_id: paymentIntent.id,
        };
        fetch(`http://localhost:5000/donation`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            // authorization: `Bearer ${localStorage.getItem("tech-token")}`,
          },
          body: JSON.stringify(donorInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              // setSuccess("Thanks For Your Contribution!");
              setTransactionId(paymentIntent.id);
              toast.success("Thanks for Donation.");
              form.reset();
              // navigate("/");
            }
          });
      }
      
      setProcessing(false);
    };
    
    return (
      <div className="text-center">
        <div className="my-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Donate Today</h2>
          <p>
            Food Box Foundation Has Served Over{" "}
            <strong className="text-indigo-700">1 Lac+</strong> child across the
            country
          </p>
          <small className='text-gray-400'>Please Provide All The Information Below</small>
        </div>
        {transactionId && (
          <p>
            Transaction ID:{" "}
            <span className="text-green-600 font-bold">{transactionId}</span>
          </p>
        )}
        <form onSubmit={handleSubmit} className="flex justify-center mt-8">
          <div className="w-80">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              className="input input-bordered input-sm w-full max-w-xs mb-5"
              required
            />
            <br />

            <CardElement
              className="border-2 p-2 rounded-lg"
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
            <br />
            <input
              type="number"
              name="amount"
              placeholder="Donation Amount*"
              className="input input-bordered input-sm w-full max-w-xs mb-5"
              required
              onBlur={(e) => setAmountFromButton(e.target.value)}
            />
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              className="input input-bordered input-sm w-full max-w-xs mb-5"
              required
            />
            <br />
            <input
              type="text"
              name="phone"
              placeholder="Contact Number*"
              className="input input-bordered input-sm w-full max-w-xs mb-5"
              required
            />
            <br />

            <button
              type="submit"
              className="btn btn-primary w-full btn-sm"
              disabled={transactionId}
            >
              Donate
              <span className="ml-1 text-yellow-400">
                {amountFromButton === 0 ? "" : amountFromButton + " Rs"}
              </span>
            </button>
          </div>
        </form>
      </div>
    );
};

export default Donate;