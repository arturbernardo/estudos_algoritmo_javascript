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
myNewFunction(); // counter -> 2

//counter is not accessible inside the global scope, but it's there.
