import { exec } from "child_process";
import { writeFile } from "fs";

export function executeShellCmd(cmd) {
  exec(cmd, (err, stdout, stderr) => {
    if (err) throw err;

    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

export function writeJson(file, data) {
  let output;
  if (typeof data == !"string") {
    output = JSON.stringify(data);
  } else output = data;

  writeFile(file, output, (err) => {
    if (err) throw err;

    console.log(`${file} saved successfuly`);
  });
}
