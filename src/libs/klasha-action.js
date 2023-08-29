export const callKlashaClient = (klashaArgs) => {
    const handler = new window.KlashaClient(
      klashaArgs.merchantKey,
      klashaArgs.amount,
      'ktest',
      klashaArgs.callbackUrl,
      klashaArgs.phone_number,
      klashaArgs.currency,
      klashaArgs.tx_ref,
      klashaArgs.kit,
      klashaArgs.isTestMode
    );
  };
  