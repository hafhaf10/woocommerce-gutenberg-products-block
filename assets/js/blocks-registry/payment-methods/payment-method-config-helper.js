// Filter out payment methods by supported features and cart requirement.
export const canMakePaymentWithFeaturesCheck = ( canMakePayment, features ) => (
	canPayArgument
) => {
	const requirements = canPayArgument.paymentRequirements || [];
	const featuresSupportRequirements = requirements.every( ( requirement ) =>
		features.includes( requirement )
	);
	return featuresSupportRequirements && canMakePayment( canPayArgument );
};

// Filter out payment methods by callbacks registered by extensions
export const canMakePaymentWithExtensions = (
	canMakePayment,
	extensionsCallbacks,
	paymentMethodName
) => ( canPayArgument ) => {
	// validate whether the payment method is available
	let canPay = canMakePayment( canPayArgument );

	if ( canPay ) {
		const namespacedCallbacks = {};
		Object.entries( extensionsCallbacks ).forEach(
			( [ namespace, callbacks ] ) => {
				if ( typeof callbacks[ paymentMethodName ] === 'function' ) {
					namespacedCallbacks[ namespace ] =
						callbacks[ paymentMethodName ];
				}
			}
		);
		canPay = Object.keys( namespacedCallbacks ).every( ( namespace ) => {
			try {
				return namespacedCallbacks[ namespace ]( canPayArgument );
			} catch ( err ) {
				// eslint-disable-next-line no-console
				console.error(
					`Error when executing callback for ${ paymentMethodName } in ${ namespace }`,
					err
				);
				throw err;
			}
		} );
	}

	return canPay;
};
