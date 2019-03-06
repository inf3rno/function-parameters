var Parser = require("./Parser");
var parser = new Parser();

function parameters(fn){
    if (!(fn instanceof Function))
        throw new Error("Function required to list parameters.");
    return parser.parse(fn.toString());
}

module.exports = parameters;