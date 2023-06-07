import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pluginEjs from "./plugin-ejs";
import { execSync } from "child_process";

console.log("%c hello world!!", "color: #86ed74");

try {
  execSync("clear", { stdio: "inherit" });
} catch (e) {}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pluginEjs()],
});
