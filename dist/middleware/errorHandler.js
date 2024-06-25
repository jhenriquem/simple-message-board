"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ status: 500, type: 'Error', message: 'An unexpected error occurred', error: err.message });
}
exports.default = errorHandler;
