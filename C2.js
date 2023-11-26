function thirt(n) {
    const sequence = [1, 10, 9, 12, 3, 4]
    
    let i = 0
    let result = 0
    let originalN = n; // Store the original value of n
    
    while (n > 0) {
        let digit = n % 10
        result += digit * sequence[i % sequence.length]
        n = Math.floor(n / 10)
        i++;
    }

    return result === originalN ? result : thirt(result);
}

console.log(thirt(1234567))