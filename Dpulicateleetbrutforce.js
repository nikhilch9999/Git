/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for(i=0;i<=nums.length-1;i++){ 
    for(j=i+1; j<=nums.length-1; j++){
        if(nums[i]==nums[j])
        {
            return true;
        }
     }       
    }
    return false;    
};