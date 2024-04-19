"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
async function readJson(fileName) {
    try {
        const rutaAbsoluta = path_1.default.resolve(__dirname, "..", fileName);
        const jsonData = await fs_1.default.promises.readFile(rutaAbsoluta, "utf-8");
        const data = JSON.parse(jsonData);
        console.log(data);
        // return data;
    }
    catch (error) {
        console.error(error);
    }
}
