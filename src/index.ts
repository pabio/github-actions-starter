import { getInput, debug, setFailed, setOutput } from "@actions/core";

export const run = async () => {
  try {
    const ms: string = getInput("milliseconds");
    debug(`Waiting ${ms} milliseconds ...`);

    debug(new Date().toTimeString());
    await wait(parseInt(ms, 10));
    debug(new Date().toTimeString());

    setOutput("time", new Date().toTimeString());
  } catch (error) {
    setFailed(error.message);
  }
};

export const wait = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(() => resolve(), milliseconds));
};
