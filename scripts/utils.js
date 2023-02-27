const { exec } = require("child_process");
const { writeFile } = require("fs");

function execute_shell_cmd(cmd) {
  exec(cmd, (err, stdout, stderr) => {
    if (err) throw err;

    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

function writeJson(file, data) {
  let output;
  if (typeof data == !"string") {
    output = JSON.stringify(data);
  } else output = data;

  writeFile(file, output, (err) => {
    if (err) throw err;

    console.log(`${file} saved successfuly`);
  });
}
