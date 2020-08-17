import { join } from "path";
import { execSync, ExecSyncOptions } from "child_process";

test("test runs", () => {
  process.env["INPUT_MILLISECONDS"] = "500";
  const ip = join(__dirname, "..", "dist", "index.js");
  const options: ExecSyncOptions = {
    env: process.env,
  };
  console.log(execSync(`node ${ip}`, options).toString());
});
