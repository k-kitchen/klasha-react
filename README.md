<!-- @format -->

# react-klasha

This is a react library for implementing klasha payment gateway

## Demo

![Demo](App.png?raw=true 'Demo Image')

## Get Started

This React library provides a wrapper to add Klasha Payments to your React application

### Install

```sh
npm install klash-pay --save
```

### Usage

```javascript
import React from 'react';
import { useKlashaPayment } from 'klasha-pay';

const App = () => {
 
  const callBack = (response) => {
    console.log(response);
  };

  const kit = {
    currency: 'NG',
    phone_number: '+2347038521460',
    email: 'klashapps@klasha.com',
    fullname: 'Gabriel Godwin',
    tx_ref: '',
    paymentType: '',
  };



  const initializePayment = useKlashaPayment({
    isTestMode: true,
    email: 'apps@klasha.com',
    merchantKey: 'the merchant public key in klahsa dashboard',
    businessId: 'business_unique_id',
    amount: '1000',
    tx_ref: 'tax_ref',
    fullname: 'Klasha Apps',
    kit: {
      currency: 'NGN',
      tx_ref: 'tax_red',
      paymentType: 'bulkpayment',
      fullname: 'Klasha Apps',
      email: 'apps@klasha.com',
      phone_number: '+234703987...',
      callBack: callWhenDone,
    },
    paymentDescription: 'Add funds to wallet',
    channel: 'woo',
  });


  return (
    <div>
      <p>
        <button
          type="button"
          theme="primary"
          height="48px"
          width="65%"
          fontSize="14px"
          onClick={() => {
            initializePayment();
          }}
        >
          pay
        </button>
      </p>
    </div>
  );
};

export default App;
;
```


## Deployment

REMEMBER TO CHANGE THE MID WHEN DEPLOYING ON A LIVE/PRODUCTION SYSTEM

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
