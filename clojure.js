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
myNewFunction();
let innerCounter = myNewFunction();
console.log(innerCounter);
innerCounter = 33;
myNewFunction();