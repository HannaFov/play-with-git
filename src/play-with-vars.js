function playWithVars() {
    const a = 1;
    let b = 2;
    b = 3;
    let c = "test string";

    const d = 4;
    let e;
    e = a + b;


    console.log(a, b, c, e);

    const booleanVar = true;
    const underfinedVar = undefined;

    console.log(booleanVar, underfinedVar);

    const obj = {
        key1: 'value1',
        key2: 'value2'
    };
    console.log(obj);

    return obj;

}
playWithVars();

console.log('\n' + playWithVars()); 