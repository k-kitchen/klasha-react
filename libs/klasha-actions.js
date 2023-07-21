export const callKlashaClient = (klashaArgs) => {
  const handler = new window.KlashaClient(
    klashaArgs.merchantKey,
    klashaArgs.businessId || 1,
    klashaArgs.amount,
    'ktest',
    klashaArgs.callbackUrl,
    klashaArgs.destinationCurrency,
    klashaArgs.sourceCurrency,
    klashaArgs.kit,
    klashaArgs.isTestMode
  );
  // handler.init();
};
