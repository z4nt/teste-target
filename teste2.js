let num = 21; 
let fib1 = 0, fib2 = 1, found = false;

while (fib1 <= num) {
    if (fib1 === num) {
        found = true;
        break;
    }
    [fib1, fib2] = [fib2, fib1 + fib2];
}

console.log(num + (found ? " pertence" : " não pertence") + " à sequência de Fibonacci.");
