function memoize(fn) {
	const cache = {}

	return function (...args) {
		const key = JSON.stringify(args)
		if (cache[key] !== undefined) {
			return cache[key]
		}

		const result = fn.apply(this, args)
		cache[key] = result

		return result
	}
}

const sum = (a, b) => a + b
const memoizedSum = memoize(sum)

function fib(n) {
	if (n <= 1) {
		return 1
	}
	return fib(n - 1) + fib(n - 2)
}
const memoizedFib = memoize(fib)

function factorial(n) {
	if (n <= 1) {
		return 1
	}
	return factorial(n - 1) * n
}
const memoizedFactorial = memoize(factorial)
