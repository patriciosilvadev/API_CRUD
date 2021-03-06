"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var UserController_1 = require("../controllers/UserController");
var routes = express_1.default.Router();
routes.post('/signup', UserController_1.signUp);
routes.post('/signin', UserController_1.signIn);
exports.default = routes;
