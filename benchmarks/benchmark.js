const { performance } = require("perf_hooks");

// SETUP 🏁

let iterations = 1e7;

const a = 1;
const b = 2;

const add = (x, y) => x + y;

// 🔚 SETUP

performance.mark("start");

// EXERCISE 💪

// %NeverOptimizeFunction(add);

while (iterations--) {
  add(a, b);
}

add("a", "b");

iterations = 1e7;
while (iterations--) {
  add(a, b);
}

// 🔚 EXERCISE

performance.mark("end");

performance.measure("My Custom Benchmark", "start", "end");

const [measure] = performance.getEntriesByName("My Custom Benchmark");
console.log(measure);
