import './App.css';
import useKlashaPayment from './libs/use-klasha';

function App() {

    const callWhenDone = () => {
        console.log('call back');
    
    }

    const initializePayment = useKlashaPayment({
        isTestMode: false,
        email: 'apps@klasha.com',
        phone_number: '+23400000000000',
        merchantKey:
            "ByBb3v1rPCYtr/tF5ebCmyMXjwVeIA4te3pnuos/wZRdU9vcQyXlSEEHI/pAGmRF",
        amount: 1000,
        tx_ref: 'ref',
        fullname: 'Klasha Apps',
        kit: {
            currency: "NGN",
            amount: 1000,
            tx_ref: 'ref',
            paymentType: "payment",
            fullname: "Klasha Apps",
            email: "apps@klasha.com",
            phone_number: "+234example-phone-number",
            callBack: callWhenDone,
        },
       
    });
  return (
    <div className="App">

    <button onClick={() => initializePayment()}>
    Pay with Klasha
    
    </button>
      
    </div>
  );
}

export default App;
