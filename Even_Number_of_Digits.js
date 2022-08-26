/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let result = 0; 
    
    for (i =0; i < nums.length; i++) {
        let num = String(nums[i])
        if (num.length % 2 === 0) {
            result = result + 1;
        }
        else { 
            result = result 
        }
    }
    
    return result;
};
