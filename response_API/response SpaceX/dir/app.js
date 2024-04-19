"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("./services");
const fs_1 = __importDefault(require("fs"));
async function main() {
    try {
        const links = await (0, services_1.getAllLinksWikipedia)();
        const jsonData = JSON.stringify(links, null, 2);
        await fs_1.default.promises.writeFile("links-launches-wikipedia.json", jsonData);
        console.log(jsonData);
    }
    catch (error) {
        console.error(error);
    }
}
main();
