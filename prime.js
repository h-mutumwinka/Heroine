function largestPrimeFactor(number) {
    let factor = 2;
    while (factor * factor <= number) {
        if (number % factor === 0) {
            number /= factor;
        } else {
            factor++;
        }
    }
    return number;
}

console.log("Largest prime factor of 600851475143:", largestPrimeFactor(600851475143));
