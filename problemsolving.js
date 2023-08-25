//factorial of the given number

let n = 3

function fact(n){

    if (n === 0 || n === 1 || n < 0){
        return 1
    }
    let factorial = n * fact(n - 1);

    return factorial
}

console.log(fact(n));

let num = 2;
num = 6;
console.log(num);


// counter problem

var createCounter = function(n) {

    let count = n;

    return function() {
        let currentvalue = count;
        count++;

        console.log(currentvalue);

        return currentvalue;
        
        
    };


};

let counter1 = createCounter(10);
counter1();
counter1();


`Write a function expect that helps developers test their code. 
It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other.
 If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. 
If they are equal, it should throw an error "Equal".`



var expect = function(val) {

    let funval = val;

    return {
        toBe:function(n){
              if(funval === n){
            return true;
        }
        throw "Not Equal"
        },

        notToBe: function(n){
        if(funval !== n){
            return true;
        }
        throw "Equal"
    }

    }
};


/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */


var createCounter = function(init) {

    let count = init;
    let initial = init;

    return {
        increment:function(){

            count++;
            let currentvalue = count;

            console.log(currentvalue);
            return currentvalue;

        },
          decrement:function(){
            count--
            let currentvalue = count;
            console.log(currentvalue);
            return currentvalue;

        },

        reset:function() {
            count = initial
            let currentvalue = count;
            console.log(currentvalue);
            return currentvalue
            
        }

    }
    
};

let counter = createCounter(5);

counter.increment();
counter.increment();
counter.increment();
counter.increment();

counter.reset()

counter.increment();

