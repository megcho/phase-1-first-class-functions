function receivesAFunction(callback) {
    return callback();
}

const spy = function createSpy() {
    return;
}

receivesAFunction(spy);

function coolTest() {
    return;
}

function returnsANamedFunction() {
    return coolTest;
}

function returnsAnAnonymousFunction() {
    return () => console.log("My puppy Frannie is cute")
}