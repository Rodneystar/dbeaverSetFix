#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
function main(query) {
    if (fs_1.statSync(query) && fs_1.statSync(query).isFile) {
        query = fs_1.readFileSync(query).toString();
    }
    return query.replace(/\[[^\]\[]*\]/g, function (setString, args) {
        var set = setString.slice(1, -1)
            .split(" ").map(function (word) { return "'" + word + "'"; }).join(",");
        return "{" + set + "}";
    });
}
exports.main = main;
console.log(main(process.argv[2]));
