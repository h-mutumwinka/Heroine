function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function smallestMultiple(limit) {
    let multiple = 1;
    for (let i = 2; i <= limit; i++) {
        multiple = lcm(multiple, i);
    }
    return multiple;
}

console.log("Smallest multiple of numbers from 1 to 20:", smallestMultiple(20));
