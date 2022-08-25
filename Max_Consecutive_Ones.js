/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    /* for loop through array, checking to see if the value is == 1. */
    // declare variables 
    
let consecutiveOnes = 0; 
let onesRecord = 0; 

    // Starting at index of [0] until the last index of the array, loop through values to check if values is equal to 1.
    for (let i = 0; i <= nums.length; i++) {
        // Add 1 to the total of "consecutiveOnes" if a 1 is found
        if (nums[i] === 1) {
            consecutiveOnes = consecutiveOnes + 1; 
        }
        
        // First loop to set initial "onesRecord" value, if a 0 is found as the next value. 
        // If the value of consecutiveOnes is greater than the value in onesRecord, change the value of onesRecord to match the value of consecutiveOnes. 
        
        else {
            if (consecutiveOnes > onesRecord) {
                onesRecord = consecutiveOnes;
            }
            // if the value of consecutiveOnes is NOT greater than onesRecord, onesRecord value does not change. 
            else {
                onesRecord = onesRecord;
            }
            // reset consecutiveOnes to 0 for next iteration through the loop. 
            consecutiveOnes = 0; 
        }
    }
    return onesRecord;
    
};
