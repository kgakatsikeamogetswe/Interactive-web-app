const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

// const [first,second,third] = data.lists
const firstArray = data.lists[0][1]
const secondArray = data.lists[1][1]
const thirdArray = data.lists[2][1]

const result = []

const extractBiggest = () => {
	if (firstArray[firstArray.length -1] >= secondArray[secondArray.length -1] && firstArray[firstArray.length -1] >= thirdArray[thirdArray.length -1]) {
		return firstArray.pop()
	}

	if (secondArray[secondArray.length -1] >= thirdArray[thirdArray.length -1]) {
		return secondArray.pop()
	}
	
	return thirdArray
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)