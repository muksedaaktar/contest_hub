import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Payment = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const handlePaymentSuccess = () => {
    toast.success("💳 Payment Successful!");

    navigate(`/contest/${state.contestId}`, {
      state: {
        paymentSuccess: true,
        contestId: state.contestId,
      },
    });
  };

  return (
    <section className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Payment</h2>

        <p className="text-center mb-6 text-gray-600">
          Pay to register for this contest
        </p>

        <button
          onClick={handlePaymentSuccess}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold"
        >
          Pay Now
        </button>
      </div>
    </section>
  );
};

export default Payment;
