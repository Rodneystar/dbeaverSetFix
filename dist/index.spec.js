"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var chai_1 = require("chai");
describe('wh[a]t[sdaf[\nhows[your]father\nfuckdafle[gs]what\n\n', function () {
    it.only('greets', function () {
        chai_1.expect(index_1.main("wh[a]tsdaf\nhows[your]father\nfuckdafle[gs]what")).to.contain("wh");
    });
});
