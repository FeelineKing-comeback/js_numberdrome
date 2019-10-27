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
      this.list.filter(el => {
        el === false;
      })
    }
  }

  sum() {
    return this.list.reduce((a, b) => {
      return a + b;
    }, 0);
  }

  product() {
    return this.list.reduce((a, b) => {
      return a * b;
    }, 1);
  }

  min() {
    if (!this.list.length) {
      throw new Error('List is empty');
    } else {
        return Math.min(...this.list);
    }
  }

  max() {
    if (!this.list.length) {
      throw new Error('List is empty');
    } else {
        return Math.max(...this.list);
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
