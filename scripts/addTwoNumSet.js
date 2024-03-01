// Input nums = [2,7,11,15] target = 9
// Input nums = [3,2,4] target = 6
function sumTwo(nums, target) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (obj[target - num] >= 0) {
      return [obj[target - num], i]
    } else {
      obj[num] = i
    }
  }
  return -1
}
console.log('11', sumTwo([2, 7, 11, 15], 9))
console.log('22', sumTwo([3, 2, 4], 6))
