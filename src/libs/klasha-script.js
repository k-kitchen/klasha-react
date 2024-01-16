import { useEffect, useState } from 'react';

export const useKlashaPayment = (options) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    const loadScript = async () => {
      try {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://js.klasha.com/pay.js';
          script.async = true;
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
        setIsScriptLoaded(true);
      } catch (error) {
        console.error('Error loading Klasha script:', error);
        setIsScriptLoaded(false);
      }
    };

    loadScript();
  }, []); 

  const initializePayment = () => {
    if (!isScriptLoaded) {
      console.error('Klasha script is not loaded.');
      return;
    }

    try {
      const kit = {
        phone_number: options.phone_number,
        email: options.email,
        fullname: options.fullname,
        tx_ref: options.tx_ref,
        callback: options.callback,
        isTestMode: options.isTestMode
      };
      
      const currencyToUse = options.currency;

      const client = new window.KlashaClient(
        options.merchantKey || '',
        options.amount,
        options.amount,
        options.ktest,
        options.callback,
        currencyToUse,
        currencyToUse,
        kit,
        options.isTestMode
      );
      client.init();
    } catch (err) {
      console.error('Error initializing KlashaClient:', err);
    }
  };

  return initializePayment;
};

export default useKlashaPayment;
