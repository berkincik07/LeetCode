
/*
Bu problemde bize bir array veriliyor bu array'de birisi hariç her elemandan iki tane oluyor ve bizden tek olanı bulmamız isteniyor.
Example 2:

Input: [4,1,2,1,2]
Output: 4
*/

var singleNumber = function(nums) {
    let x = {};
    for(let i = 0; i < nums.length; i++) {
        x[nums[i]] = x[nums[i]] ? false : true;
    }
    for(let key in x) {
        if(x[key]) return key;
    }
};
