import axios from "axios";

const PaymentWithBkash = () => {
	const pay = async () => {
        try {
            const { data } = await axios.post('http://localhost:5000/api/bkash/payment/create', { amount: 50, orderId: 1 }, { withCredentials: true })
            window.location.href = data.bkashURL
        } catch (error) {
            console.log(error.response.data)
        }
    }
  return (
	<div className="flex items-center justify-center mt-32">
    <div className="w-full md:w-1/2 p-4 text-center ">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-4">
          <img src="https://raw.githubusercontent.com/Shipu/bkash-example/master/bkash_payment_logo.png" alt="bKash Logo"  />
          <button onClick={pay}className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full w-full">
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
