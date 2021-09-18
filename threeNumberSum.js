function threeNumberSum(array, targetSum) {
    let returnArray = []
    array.sort((f, s) => f < s ? -1 : (f == s ? 0 : 1))
    for (let i = 0; i < (array.length - 2); i++) {
        let elm = array[i]

        let leftIndex = i + 1, rightIndex = array.length - 1
        if (leftIndex >= rightIndex) break;
        let left = array[leftIndex]
        let right = array[rightIndex]
        let sum = left + right + elm
        while (leftIndex < rightIndex) {
            if (sum === targetSum) {
                returnArray.push([elm, left, right])
                leftIndex++
                rightIndex--
            }
            if (sum < targetSum) {
                leftIndex++
            }
            if (sum > targetSum) {
                rightIndex--
            }
            if (leftIndex == rightIndex) break
            left = array[leftIndex]
            right = array[rightIndex]
            sum = left + right + elm
            console.log([elm, left, right], sum, targetSum)
        }


    }
    return returnArray
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
