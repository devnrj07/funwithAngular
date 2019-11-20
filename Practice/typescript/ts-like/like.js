"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Like = /** @class */ (function () {
    function Like(_likes, _selected) {
        this._likes = _likes;
        this._selected = _selected;
    }
    Object.defineProperty(Like.prototype, "likes", {
        get: function () { return this._likes; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "selected", {
        get: function () { return this._selected; },
        enumerable: true,
        configurable: true
    });
    Like.prototype.toggleLike = function () {
        this._likes += (this._selected) ? -1 : +1; // if true -1 else +1 use ternary operator instead of if else
        this._selected = !this._selected; //toggle the value 
    };
    return Like;
}());
exports.Like = Like;
