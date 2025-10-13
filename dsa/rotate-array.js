var rotate = function(nums, k) {
    const n=nums.length;
    k=k%n;
function helper(start,end){
    while(start<end){
        [nums[start],nums[end]]=[nums[end],nums[start]];
        start++;
        end--;
    }
}
    helper(0,n-1);
    helper(0,k-1);
    helper(k,n-1);
    
};