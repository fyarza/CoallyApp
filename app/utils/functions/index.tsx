export const dlog = (message, ...optionalParams) => {
	if (__DEV__) {
		console.log(message, ...optionalParams);
	}
};
