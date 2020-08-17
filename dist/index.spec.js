"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const child_process_1 = require("child_process");
test("test runs", () => {
    process.env["INPUT_MILLISECONDS"] = "500";
    const ip = path_1.join(__dirname, "..", "dist", "index.js");
    const options = {
        env: process.env,
    };
    console.log(child_process_1.execSync(`node ${ip}`, options).toString());
});
