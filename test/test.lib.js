const expect = require("chai").expect;
const parameters = require("../.");

describe("lib", function () {

    it("should use the parser on the source code of the given function", function () {
        expect(parameters(function (a, b) {
        })).to.eql(["a", "b"]);
        expect(parameters((a, b) => {
        })).to.eql(["a", "b"]);
        //expect(parameters(([a,b]) => {})).to.eql(["[a,b]"]);
        //expect(parameters(({a,b}) => {})).to.eql(["{a,b}"]);
        //expect(parameters((a, ...b) => {})).to.eql(["a","...b"]);
        expect(parameters((a, b) => null)).to.eql(["a", "b"]);
        //expect(parameters(class A{q(){}constructor(a,b){}})).to.eql(["a","b"]);
        expect(parameters((class A {
            x(a, b) {
            }
        }).prototype.x)).to.eql(["a", "b"]);
        //expect(parameters(function (a, b /*, c*/) {})).to.eql(["a", "b"]);
    });

});