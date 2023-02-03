import chalk from "chalk";

function repeat(times) {
  return function (value, context) {
    return function (...args) {
      const result = [];
      for (let i = 0; i < times; i++) {
        result.push(value.apply(this, args));
      }
      return result;
    };
  };
}

class YanRen {
  @repeat(6)
  log(...args) {
    console.log(chalk.green(...args));
  }
}

const yr = new YanRen();

yr.log("“我喜欢柯洁。”", "——节选自《我没有说过我喜欢柯洁》");
