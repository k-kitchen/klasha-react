import { useState, useEffect } from 'react';

const useKlashaPayment = ({
  merchantKey,
  businessId,
  amount,
  description = '',
  currency = 'NGN',
  destinationCurrency,
  environment = true,
  transactionRef,
  customer = {},
  onSuccess,
  onError,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [paymentData, setPaymentData] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.klasha.com/pay.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const payWithKlasha = () => {
    if (
      !merchantKey ||
      !businessId ||
      !amount ||
      !transactionRef ||
      !currency ||
      !destinationCurrency
    ) {
      setError('Missing required payment parameters.');
      return;
    }

    setLoading(true);
    setError(null);

    const paymentKit = {
      tx_ref: transactionRef,
      fullname: customer.fullname || '',
      firstName: customer.firstName || '',
      lastName: customer.lastName || '',
      email: customer.email || '',
      phone_number: customer.phoneNumber || '',
      businessId,
      merchantKey,
      amount,
      sourceAmount: amount.toString(),
    };

    try {
      const client = new window.KlashaClient(
        merchantKey,
        businessId,
        amount,
        description,
        (data) => {
          setPaymentData(data);
          setLoading(false);
          if (onSuccess) onSuccess(data);
        },
        currency,
        destinationCurrency,
        paymentKit,
        environment,
      );
    } catch (err) {
      setError('Payment initialization failed.');
      setLoading(false);
      if (onError) onError(err);
    }
  };

  return { payWithKlasha, loading, error, paymentData };
};

export default useKlashaPayment;
