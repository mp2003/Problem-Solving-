/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        // console.log(args.filter((el)=>  Number.isInteger(el)))
        return "Hello World"
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */