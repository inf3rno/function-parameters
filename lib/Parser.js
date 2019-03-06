function Parser(){
}
Parser.prototype = {
    constructor: Parser,
    parse: function (string){
        return this.parseFunction(string, 0);
    },
    parseFunction(string, pointer){
        var functionLexer = /\(/g;
        functionLexer.lastIndex = pointer;
        functionLexer.exec(string);
        return this.parseParameters(string, functionLexer.lastIndex);
    },
    parseParameters: function (string, pointer){
        var parameters = [];
        var parameterLexer = /\w+|\)/g;
        parameterLexer.lastIndex = pointer;
        while (true){
            var paramMatch = parameterLexer.exec(string);
            if (paramMatch[0] === ")")
                break;
            parameters.push(paramMatch[0]);
        }
        return parameters;
    }
};

module.exports = Parser;