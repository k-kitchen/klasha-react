import React from "react";
import useKlashaPayment from '../../libs/use-klasha';

const PaymentButton = () => {
  const { payWithKlasha, loading, error, paymentData } = useKlashaPayment({
    merchantKey: "your-merchant-key",
    businessId: 133,
    amount: 1000,
    description: "Product Purchase",
    currency: "NGN",
    destinationCurrency: "USD",
    transactionRef: "unique-transaction-ref-12345",
    customer: {
      fullname: "John Doe",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phoneNumber: "1234567890",
    },
    environment: true,
    onSuccess: (data) => {
      console.log("Payment successful!", data);
    },
    onError: (err) => {
      console.error("Payment failed", err);
    },
  });

  return (
    <div>
      <button onClick={payWithKlasha} disabled={loading}>
        {loading ? "Processing..." : "Pay with Klasha"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {paymentData && <p>Payment successful: {JSON.stringify(paymentData)}</p>}
    </div>
  );
};

export default PaymentButton;
