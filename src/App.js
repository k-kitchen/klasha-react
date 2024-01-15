import './App.css';
import { useKlashaPayment } from './libs/klasha-script';

function App() {
  const callWhenDone = () => {
    console.log('call back');
  }

  const initializePayment = useKlashaPayment({
    phone_number: '+23400000000000',
    email: 'apps@klasha.com',
    merchantKey: 'W2mbGtdx5vKCepFaUm2CqdzebaVW9z22shubB4xFbKTR3g4sL72+7qNQYHTUEfs0my1e/hAO1Nkdx9YbXTjUOg==',
    amount: 1000,
    tx_ref: 'ref',
    businessId: 1,
    fullname: 'Klasha Apps',
    currency: 'NGN',
    callback: callWhenDone,
  });

  return (
    <div className="App">
      <button onClick={initializePayment}>
        Pay with Klasha
      </button>
    </div>
  );
}

export default App;
