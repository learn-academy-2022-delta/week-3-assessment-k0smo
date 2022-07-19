// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("fiblength", () => {
    const fibLength1 = "6"
    const fibLength2 = "10"
     it("takes in a string and logs the index of the first vowel.", () => {
      expect(fibLength(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
      expect(fibLength(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
     })
     })

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// b) Create the function that makes the test pass.
// Input variables fiblength to equal numbers let fibarray equal to array fiblength.
// Output variables length. Push the fibArray to the end of the array and returns an array fibonacci.
let fibLength = (num) => {
  let theFibArray = [1, 1]
  for (let i = 2; i < num; i++) {
       theFibArray.push(theFibArray[i - 2] + theFibArray[i - 1])
  }
  return theFibArray
}

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

  describe("onlyOddNumbers", () => {
    it("that takes in an array and returns a new array of only odd numbers sorted from least to greatest.", () => {
      expect(onlyOddNumbers(fullArr1)).toEqual([-9, 7, 9, 199])
      expect(onlyOddNumbers(fullArr2)).toEqual([-823, 7, 23])
    })
  })


// b) Create the function that makes the test pass.
// Input: Array of mixed data types.
//   filter out numbers. 
//   use modulo operator to calculate odd numbers.
//   align them from least to greatest.
// output: Array will output only odd numbers sorted from least to greatest.

const onlyOddNumbers = (array) => {
  let numbers = array.filter(value => typeof value === 'number' && value % 2 !== 0);
 return numbers.sort(function (a, b) {return a - b})
 
}



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []


describe("accumulatingSum", () => {
   it("takes in an array and returns an array of the accumulating sum", () => {
    const numbersToAdd1 = [2, 4, 45, 9]
    const numbersToAdd2 = [0, 7, -8, 12]
    const numbersToAdd3 = []
     expect(accumulatingSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
     expect(accumulatingSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
     expect(accumulatingSum(numbersToAdd3)).toEqual([])
    })
})

// b) Create the function that makes the test pass.
// input accumulatingSum to the array let array sum equal to zero and for the length of the array push array sum. 
//output accumulatingSum to the array.
const accumulatingSum = (array) => {
  let arraySum = 0
  let accumulatedSumArray = []
  for (i = 0; i < array.length; i ++) {
    arraySum = arraySum + array[i]
    accumulatedSumArray.push(arraySum)
  }
    return accumulatedSumArray
}
