const { performance } = require("perf_hooks");

// SETUP 🏁

let iterations = 100000;

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const test = () => {
  const add = (point) => point.x + point.y;
  const newPoint1 = new Point(1, 2);
  add(newPoint1);
};

// 🔚 SETUP

performance.mark("start");

// EXERCISE 💪

// %NeverOptimizeFunction(add);

while (iterations--) {
  test();
}

// 🔚 EXERCISE

performance.mark("end");

performance.measure("My Benchmark 2", "start", "end");

const [measure] = performance.getEntriesByName("My Benchmark 2");
console.log(measure);
