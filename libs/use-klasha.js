import { useEffect } from "react";
import useKlashaScript from "./klasha-script";
import { callKlashaClient } from "./klasha-action";

export default function useKlashaPayment(options) {
  const [scriptLoaded, scriptError] = useKlashaScript(options.isTestMode);
  const {
    isTestMode,
    merchantKey,
    amount,
    tx_ref,
    fullname,
    email,
    phone_number,
    callbackUrl,
    metadata,
    kit,
  } = options;

  function clean(obj) {
    for (const propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined) {
        delete obj[propName];
      }
    }
    return obj;
  }

  function initializePayment(callBack) {
    if (scriptError) {
      throw new Error("Unable to load klasha inline script");
    }

    if (scriptLoaded) {
      const klashaArgs = {
        callBack: callBack ? callBack : () => null,
        isTestMode,
        merchantKey,
        amount,
        tx_ref,
        fullname: fullname || "",
        email: email || "",
        phone_number: phone_number || "",
        callbackUrl: callbackUrl || "",
        metadata: metadata || {},
        kit: kit || null,
        "data-custom-button": options["data-custom-button"] || "",
      };
      callKlashaClient(clean(klashaArgs));
    }
  }

  useEffect(() => {
    if (scriptError) {
      throw new Error("Unable to load klasha inline script");
    }
  }, [scriptError]);

  return initializePayment;
}
