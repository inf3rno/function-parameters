const expect = require("chai").expect;
const Parser = require("../lib/Parser");

describe("Parser", function () {

    var parser = new Parser();

    it ("should return an empty array by empty parameter list", function () {
        var parameters = parser.parse("function (){}");
        expect(parameters).to.eql([]);
    });

    it ("should return a parameter array by simple parameters", function (){
        var parameters = parser.parse("function (a,b){}");
        expect(parameters).to.eql(["a","b"]);
    });

});