"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = getUsers;
exports.NewUser = NewUser;
const mongoose_1 = require("mongoose");
const userModel_1 = require("../database/userModel");
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const usuarios = yield userModel_1.userModel.find({}, { name: 1, message: 1, date: 1 });
            return usuarios;
        }
        catch (err) {
            return new mongoose_1.Error(`Error fetching users : ${err}`);
        }
    });
}
function NewUser(userData) {
    return __awaiter(this, void 0, void 0, function* () {
        const newUser = new userModel_1.userModel(userData);
        try {
            yield newUser.save();
            return "Success";
        }
        catch (err) {
            return new mongoose_1.Error(`Error saving new user : ${err}`);
        }
    });
}
