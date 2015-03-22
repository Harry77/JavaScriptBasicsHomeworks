function arrayManipulator(input) {
    var nums = input.filter(function(element) {
        return !isNaN(element);
    })
    nums = nums.sort(function(x, y) {
        return x < y;
    })
    console.log("Min number: " + nums[nums.length - 1]);
    console.log("Max number: " + nums[0]);
    var count = 1;
    var maxCount = count;
    var mostFreqNum = nums[0];
    for (var i = 1; i < nums.length - 1; i++) {
        if (nums[i] === nums[i-1]) {
            count++;
            if (count > maxCount) {
                mostFreqNum = nums[i];
                maxCount = count;
            }
        } else {
            count = 1;
        }
    }
    console.log("Most frequent number: " + mostFreqNum);
    console.log(nums);
}

arrayManipulator(["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]]);