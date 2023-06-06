import path from "node:path";
import fs, { mkdirSync } from "node:fs";
import { normalizePath, loadEnv } from "vite";

function exist(folder) {
  return fs.existsSync(folder);
}
function copas(src, dst) {
  // File destination.txt will be created or overwritten by default.
  fs.copyFile(src, dst, (err) => {
    if (err) throw err;
    console.log("copied .");
  });
}
function readFileInFolder(dir) {
  let dst = dir + "/public/src/";
  let src = dir + "/src/";
  !exist(dst) && fs.mkdirSync(dst);
  let folderOfFiles = fs.readdirSync(src);
  // console.log(folderOfFiles);
  folderOfFiles.forEach((a) => {
    let _dst = dst + a + "/";
    if (!a.includes(".") && !exist(_dst)) {
      fs.mkdirSync(_dst);
    }
    if (!a.includes(".")) {
      let _src = src + a + "/";
      let _folderOfFiles = fs.readdirSync(_src);
      _folderOfFiles.forEach((b) => {
        if (b.includes(".ejs")) copas(_src + b, _dst + b);
      });
    }
  });
}
export default function pluginEjs() {
  return {
    name: "noob-plugin",
    configResolved(e) {
      readFileInFolder(e.envDir);
    },
  };
}
