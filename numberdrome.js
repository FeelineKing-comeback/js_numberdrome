class Numberdrome {
  constructor() {
    this.list = [];
  }

  addNumber(n) {
    if (isNaN(parseInt(n, 10))) {
      throw new Error("n is NaN");
    } else {
      this.list.push(parseInt(n, 10));
    }
  }

  removeNumber(n) {
    if (isNaN(parseInt(n, 10))) {
      throw new Error("n is NaN");
    } else {
      this.list.splice(this.list.indexOf(n), 1);
    }
  }

  sum() {
    return this.list.reduce(function(a, b) {
      return a + b;
    }, 0);
  }

  product() {
    return this.list.reduce(function(a, b) {
      return a * b;
    }, 1);
  }

  min() {
    if (this.list.length === 0) {
      throw new Error('List is empty');
    } else {
      return this.list.reduce(function(a, b) {
        return Math.min(a, b);
      });
    }
  }

  max() {
    if (this.list.length === 0) {
      throw new Error('List is empty');
    } else {
      return this.list.reduce(function(a, b) {
        return Math.max(a, b);
      });
    }
  }
}

const numberdrome = new Numberdrome();

numberdrome.addNumber(10);
numberdrome.addNumber(23);
numberdrome.removeNumber(10);
numberdrome.addNumber('10');

console.log(numberdrome.min());
console.log(numberdrome.max());
