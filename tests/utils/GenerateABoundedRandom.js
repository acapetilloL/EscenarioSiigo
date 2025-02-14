class GenerateABoundedRandom {
  static number() {
    return new GenerateABoundedRandom();
  }

  betweenOneAnd(endNumber) {
    return Math.floor(Math.random() * endNumber) + 1;
  }
}

module.exports = GenerateABoundedRandom;
