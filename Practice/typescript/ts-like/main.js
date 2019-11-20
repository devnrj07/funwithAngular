"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_1 = require("./like");
var likes = new like_1.Like(10, true);
likes.toggleLike();
console.log("Likes : " + likes.likes + " && Status : " + likes.selected);
