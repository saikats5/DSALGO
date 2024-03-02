// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"

738
615
492
56088
function multiply(num1, num2) {
  let maxLength = Math.max(num1.length, num2.length)
  let val = 1
  for (let i = 0; i < maxLength; i++) {
    val = Number(num1.length - 1 - i)
  }
}
console.log('11'.multiply('2', '3'))
console.log('22'.multiply('123', '456'))
