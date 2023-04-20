const { performance } = require("perf_hooks");

// SETUP 🏁

let iterations = 1000000;

class Point {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

// 🔚 SETUP

performance.mark("start");

// EXERCISE 💪

// %NeverOptimizeFunction(add);

while (iterations--) {
  const point = new Point(1, 2, 4);
  //   point.z = undefined;
  //   delete point.z;
  //   delete point.y;
  delete point.x;

  JSON.stringify(point);
}

// 🔚 EXERCISE

performance.mark("end");

performance.measure("My Class Benchmark", "start", "end");

const [measure] = performance.getEntriesByName("My Class Benchmark");
console.log(measure);
