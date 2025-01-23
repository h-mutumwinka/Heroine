function evenFibonacciSum(limit) {
    let a = 1, b = 2, sum = 0;
    while (b <= limit) {
        if (b % 2 === 0) {
            sum += b;
        }
        const next = a + b;
        a = b;
        b = next;
    }
    return sum;
}

console.log("Sum of even Fibonacci numbers below 4 million:", evenFibonacciSum(4000000));
