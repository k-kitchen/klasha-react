<!-- @format -->

# react-klasha

This is a react library for implementing klasha payment gateway

## Demo

![Demo](App.png?raw=true 'Demo Image')

## Get Started

This React library provides a wrapper to add Klasha Payments to your React application

### Install

```sh
npm install klasha-pay --save
```

### Usage

```javascript
import React from 'react';
import { useKlashaPayment } from 'klasha-pay';

const App = () => {

  const { payWithKlasha, loading, error, paymentData } = useKlashaPayment({
    merchantKey: 'your-merchant-key',
    businessId: 133,
    amount: 1000,
    description: 'Product Purchase',
    currency: 'NGN',
    destinationCurrency: 'USD',
    transactionRef: 'unique-transaction-ref-12345',
    customer: {
      fullname: 'John Doe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phoneNumber: '1234567890',
    },
    /*enviroment: true would call Klasha dev while enviroment: false will call production */
    environment: true,
    onSuccess: (data) => console.log('Payment successful!', data),
    onError: (err) => console.error('Payment failed', err),
  });


  return (<div>
      <button onClick={payWithKlasha} disabled={loading}>
        {loading ? 'Processing...' : 'Pay with Klasha'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {paymentData && <p>Payment successful: {JSON.stringify(paymentData)}</p>}
    </div>);
};

export default App;
;
```


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Some commit message'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

Thanks!
Klasha.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
