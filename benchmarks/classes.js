const a = { val: 1 };
const b = { val: "1" };

// use special syntax for "%HaveSameMap" to work
// node --allow-natives-syntax

console.log(%HaveSameMap(a, b));
