"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/teste', (req, res) => {
    console.log(req.body);
    //retornar dado comuns 
    //return res.send(req.body);
    //retornar JSon
    return res.json(req.body);
});
router.post('/teste/:id', (req, res) => {
    console.log(req.params.id);
    //retornar JSon
    return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json(req.body);
});
