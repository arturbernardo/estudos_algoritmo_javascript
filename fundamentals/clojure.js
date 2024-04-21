function outer () {
    let counter = 0;
    function incrementCounter() { 
        counter ++; 
        console.log(counter);
        return counter;
    }
    return incrementCounter;
}

const myNewFunction = outer();
myNewFunction(); // counter -> 1
let innerCounter = myNewFunction(); // counter -> 2
console.log(innerCounter); // innerCounter -> 2
innerCounter = 33; // innerCounter -> 33
myNewFunction(); // counter -> 3
console.log(outer.counter); // undefined
console.log(myNewFunction.counter); // undefined

//counter is not accessible inside the global scope, but it's there.