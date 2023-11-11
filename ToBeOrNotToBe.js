const expect = function (val) {
	return {
		toBe: val2 => {
			if (val !== val2) {
				throw new Error(`Expected ${val} to be ${val2}`)
			} else return true
		},
		notToBe: val2 => {
			if (val === val2) {
				throw new Error(`Expected ${val} not to be ${val2}`)
			} else return true
		},
	}
}
