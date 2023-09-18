// Immediately Invoked Function Expression (IIFE)
// () => {
//     console.log("DB is connected");
// }
// The above code is normal arrow function code
(
    function chai3() {
        console.log(`Db is connected`);
    }
)();
// The above IIFE is "named IIFE"
// The above code is IIFE
(
    (variable) => {
        console.log(`DB is connected ${variable}`);
    }
)(2)
// When two IIFEs are written then they should be sepreated by semicolon