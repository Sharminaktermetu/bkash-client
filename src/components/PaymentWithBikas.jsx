import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const PaymentWithBkash = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialAmount = parseFloat(queryParams.get("price"));

  const [amount, setAmount] = useState(initialAmount);

  useEffect(() => {
    const newAmount = parseFloat(queryParams.get("price"));
    setAmount(newAmount);
  }, [location.search]);

  const pay = async () => {
    try {
      const response = await axios.post('https://payment-2zik.onrender.com/api/bkash/payment/create', {
        amount: amount,
        orderId: 1,
      },{ withCredentials: true });
      const data = response.data;
      window.location.href = data.bkashURL;
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center mt-32">
      <div className="w-full md:w-1/2 p-4 text-center ">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-4">
            <img src="https://raw.githubusercontent.com/Shipu/bkash-example/master/bkash_payment_logo.png" alt="bKash Logo" />
            <p>Amount: ৳{amount}</p>
            <button onClick={pay} className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full w-full mt-2">
              Pay with bKash
            </button>
          </div>
          <p className="text-gray-700 text-center">
            Complete your payment to unlock premium features.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentWithBkash;
