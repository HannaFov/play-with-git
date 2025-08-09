function playWithVars() {
    const a = Number('1');
    const b = Number('a');
    // Explicitly converting string to number
   
    console.log(a, b); // Outputs: 1 NaN

    const s1 = String(1);
    const s2 = String(true);
    const s3 = String(null);
    const s4 = String(undefined);
    const s5 = String({

        var1: 'value1',
        var2: 'value2'
    });
    const s6 = JSON.stringify();
    console.log(s1, s2, s3, s4, s5, s6); 
    // Outputs: "1" "true" "null" "undefined" '{"var1":"value1","var2":"value2"}' "{}"
    const c1 = a + s1;
    console.log(c1); // Outputs: "11" (string concatenation)
    

}
playWithVars();

