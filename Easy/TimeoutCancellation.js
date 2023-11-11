function delayFunction(fn, args, t) {
	let timeoutId = setTimeout(() => {
		fn.apply(null, args)
	}, t)

	const cancelFn = () => {
		clearTimeout(timeoutId)
	}

	return cancelFn
}

function repeatFunction(fn, args, t) {
	// Call the function immediately
	fn.apply(null, args)

	// Set up the interval
	let intervalId = setInterval(() => {
		fn.apply(null, args)
	}, t)

	// Return the cancellation function
	const cancelFn = () => {
		clearInterval(intervalId)
	}

	return cancelFn
}
