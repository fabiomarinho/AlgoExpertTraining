function longestPalindromicSubstring(string) {
    let ret = ""
    let lastIndex = string.length - 1
    for (let baseIndex = 0; baseIndex <= lastIndex; baseIndex++) {
        let candidate = string[baseIndex]
        if (candidate.length > ret.length) {
            ret = candidate
        }
        for (let palindromeIndex = 1; ; palindromeIndex++) {
            //Center letter detection
            let begIndex = baseIndex - palindromeIndex
            let endIndex = baseIndex + palindromeIndex

            if (begIndex < 0) break
            if (endIndex > lastIndex) break

            if (string[begIndex] == string[endIndex]) {
                candidate = string.substr(begIndex, endIndex - begIndex + 1)
            } else {
                break
            }
            if (candidate.length > ret.length) {
                ret = candidate
            }
        }
        for (let palindromeIndex = 1; ; palindromeIndex++) {
            //Center letter detection
            let begIndex = baseIndex - palindromeIndex
            let endIndex = baseIndex + palindromeIndex - 1

            if (begIndex < 0) break
            if (endIndex > lastIndex) break

            if (string[begIndex] == string[endIndex]) {
                candidate = string.substr(begIndex, endIndex - begIndex + 1)
            } else {
                break
            }

            if (candidate.length > ret.length) {
                ret = candidate
            }
        }


    }
    return ret
}
// Do not edit the line below.
exports.longestPalindromicSubstring = longestPalindromicSubstring;
