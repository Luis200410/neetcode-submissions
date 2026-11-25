class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const exists = new Set(nums)
        return exists.size < nums.length
    }
}
