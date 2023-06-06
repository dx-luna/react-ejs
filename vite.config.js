import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pluginEjs from "./plugin-ejs";
import { execSync } from "child_process";
execSync("clear", { stdio: "inherit" });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pluginEjs()],
});
