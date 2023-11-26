
// Solution 1
function accum(s) {
	let result = s.split('').map((letter, index) => {
        return letter.toUpperCase() + letter.toLowerCase().repeat(index)
    }).join('-')
    return result
}


// Solution 2
function accum(s) {
    let splitArray = s.split('')

    let result = splitArray.map((letter, index) => {
        return letter.toUpperCase() + letter.toLowerCase().repeat(index)
    })

    // join array of string with -
    result = result.join('-')
    return result
}


// testcase
// const main = () => {
//     let s = 'abcd'
//     let result = accum(s)
//     console.log(result)
// }

// main()