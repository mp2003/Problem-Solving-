/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let a = init;
    const increment = () => {
        return ++a;
    }
    const decrement = () => {
        return --a;
    }
    const reset = () => {
        a = init;
        return init;
    }

    return {
        increment, decrement, reset
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */