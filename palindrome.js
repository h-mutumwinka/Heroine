function isPalindrome(number) {
    const str = number.toString();
    return str === str.split('').reverse().join('');
}

function largestPalindromeProduct() {
    let maxPalindrome = 0;
    for (let i = 999; i >= 100; i--) {
        for (let j = 999; j >= 100; j--) {
            const product = i * j;
            if (isPalindrome(product) && product > maxPalindrome) {
                maxPalindrome = product;
            }
        }
    }
    return maxPalindrome;
}

console.log("Largest palindrome product of two 3-digit numbers:", largestPalindromeProduct());
