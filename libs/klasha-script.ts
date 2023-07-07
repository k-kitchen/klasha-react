/** @format */

import { useState, useEffect } from 'react';

const cachedScripts: string[] = [];

export default function useKlashaScript(isTestMode = false) {
	let src1 = 'https://js.klasha.com/pay.js';
	// let src1 = "http://localhost:3000/pay.js";

	const [state, setState] = useState({
		loaded: false,
		error: false,
	});

	useEffect(() => {
		if (cachedScripts.includes(src1)) {
			setState({
				loaded: true,
				error: false,
			});
		} else {
			const divScript = window.document.createElement('div');
			divScript.id = 'ktest';
			window.document.body.appendChild(divScript);

			const script1 = document.createElement('script');
			script1.src = src1;
			script1.async = true;

			const onScriptLoad = () => {
				setState({
					loaded: true,
					error: false,
				});
			};

			const onScriptError = () => {
				const index1 = cachedScripts.indexOf(src1);
				if (index1 >= 0) cachedScripts.splice(index1, 1);
				script1.remove();

				setState({
					loaded: true,
					error: true,
				});
			};

			script1.addEventListener('load', onScriptLoad);
			script1.addEventListener('complete', onScriptLoad);
			script1.addEventListener('error', onScriptError);

			document.body.appendChild(script1);

			return () => {
				script1.removeEventListener('load', onScriptLoad);
				script1.removeEventListener('error', onScriptError);
			};
		}
	}, [src1]);

	return [state.loaded, state.error];
}
