var expect = require("chai").expect;
var algorithms = require("../lib/algorithms1");

describe("Array.prototype methods", function() {

  var array = [];

  //Resets array, for test conditions
  beforeEach(function(done) {
    array = ["Steve", "Colin", "Ted"];
    done();
  });

  describe("push", function() {
    before(function(done) {
      Array.prototype.push2 = algorithms.push;
      done();
    });

    it("should take a single input, and add it to the end of the array", function() {
      array.push2("Albert");
      expect(array).to.deep.equal(["Steve", "Colin", "Ted", "Albert"]);
    });

    it("should return the new length of the array", function() {
      expect(array.push2("Albert")).to.deep.equal(4);
    });

    it("should take an arbitrary number of inputs, adding them in order", function() {
      array.push2("Albert","Lexi","Maggie");
      expect(array).to.deep.equal(["Steve", "Colin", "Ted", "Albert","Lexi","Maggie"]);
    });
  });

  describe("pop", function() {
    before(function(done) {
      Array.prototype.pop2 = algorithms.pop;
      done();
    });

    it("should return the last item in the array", function() {
      expect(array.pop2()).to.deep.equal("Ted");
    });

    it("should remove a single item from the end of the array", function() {
      array.pop2();
      expect(array).to.deep.equal(["Steve", "Colin"]);
    });
  });

  describe("shift", function() {
    before(function(done) {
      Array.prototype.shift2 = algorithms.shift;
      done();
    });

    it("should return the first item in the array", function() {
      expect(array.shift2()).to.deep.equal("Steve");
    });

    it("should remove the first item of the array", function() {
      array.shift2();
      expect(array).to.deep.equal(["Colin", "Ted"]);
    });

    it("should decrement indexes of all remaining items in the array", function() {
      array.shift2();
      expect(array[0]).to.deep.equal("Colin");
    });
  });

  describe("unshift", function() {
    before(function(done) {
      Array.prototype.unshift2 = algorithms.unshift;
      done();
    });

    it("should take a single input, and add it to the front of the array", function() {
      array.unshift2("Albert");
      expect(array).to.deep.equal(["Albert", "Steve", "Colin", "Ted"]);
    });

    it("should increment indexes of all items previously in the array", function() {
      array.unshift2("Albert");
      expect(array[1]).to.deep.equal("Steve");
    });

    it("should return the new length of the array", function() {
      expect(array.unshift2("Albert")).to.deep.equal(4);
    });

    it("should take an arbitrary number of inputs, unshifting from last to first", function() {
      array.unshift2("Albert","Lexi","Maggie");
      expect(array).to.deep.equal(["Albert","Lexi","Maggie", "Steve", "Colin", "Ted"]);
    });
  });
});


describe("unique", function() {
  var array = [];

  before(function(done) {
    array = ["moose", "rat", "tiger", "bald eagle", "hawk", "tiger", "stingray", "bald eagle", "iguana", "moose", "rat",];
    done();
  });

  it("should take an array of English words, and return an array with all duplicated removed", function() {
    expect(algorithms.unique(array)).to.deep.equal(["moose", "rat", "tiger", "bald eagle", "hawk", "stingray", "iguana"]);
  });
});

describe("frequency2", function() {
  var array = [];

  it("should take an array of English words and return the most common letter, if only one", function() {
    array = ["moose", "rat", "tiger", "bald eagle", "hawk", "panda"];
    expect(algorithms.frequency2(array)).to.deep.equal("a");
  });

  it("should take an array of English words and return an array of the most common letters, if there is a tie", function() {
    array = ["moose", "rat", "tiger", "bald eagle", "hawk"];
    expect(algorithms.frequency2(array)).to.deep.equal(["e","a"]);
  });

});
