"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    date: { type: String, required: true },
    message: { type: String, required: true }
});
exports.userModel = (0, mongoose_1.model)("User", userSchema);
