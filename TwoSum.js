/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for(i=0; i<nums.length; i++){
      for(j=0; j<nums.length; j++){
          if (nums[i]+nums[j]==target){
              if(i!=j){
                  return[i, j]
              }
          }
      }
  }
};