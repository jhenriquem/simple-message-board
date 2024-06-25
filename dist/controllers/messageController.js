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
exports.getMessages = getMessages;
exports.postMessage = postMessage;
const Users_1 = require("../services/Users");
function getMessages(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield (0, Users_1.getUsers)();
            const response = { status: 200, type: "Success", data: users };
            res.status(200).json(response);
        }
        catch (err) {
            const response = { status: 500, type: "Error", message: "error returning to messages", error: err };
            res.status(500).json(response);
            console.log(`Erro : ${err}`);
        }
    });
}
function postMessage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = req.body;
        if (!user.name || !user.date || !user.message) {
            return res.status(400).json({ status: 400, type: "Error", message: "Invalid request data" });
        }
        try {
            yield (0, Users_1.NewUser)(user);
            const response = { status: 201, type: "Success", message: "successful adding user", whatUser: user };
            res.status(201).json(response);
            console.log("successful adding user", user);
        }
        catch (err) {
            const response = { status: 500, type: "Error", message: "Error adding user", erro: err };
            res.status(500).json(response);
            console.log("error adding user", user, err);
        }
    });
}
