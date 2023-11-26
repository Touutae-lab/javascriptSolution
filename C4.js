function sumIntervals(intervals) {
    let sum = 0;
    intervals.sort((a, b) => b[1] - a[1]);
    
    let previous = intervals[0][0];
    for (let i = 0; i < intervals.length; i++) {
            if (previous < intervals[i][1] && i > 0) {
                if (previous < intervals[i][0]) {
                    continue;
                }
                sum += previous - intervals[i][0];
            } else {
                sum += intervals[i][1] - intervals[i][0]
            }
            previous = intervals[i][0];
    }
    return sum;
}

function main() {
    let intervals = [[1,16], [10, 20], [5, 11]]
    let sum = sumIntervals(intervals)
    console.log(sum)
}

main()