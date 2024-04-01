import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  console.log(command, mode, isSsrBuild, isPreview);

  const env = loadEnv(mode, process.cwd(), "");

  console.log(process.cwd());

  return {
    root: process.cwd(),
    base: "/",
    mode: mode,
    define: { __APP_VERSION__: JSON.stringify(env.APP_VERSION) },
    plugins: [react()],
    publicDir: "public",
    resolve: {
      alias: {
        "@/": `${path.resolve(__dirname, "src")}/`,
      },
    },
    server: {
      port: 3000,
      strictPort: true,
      open: false,
      proxy: {
        "/api": {
          target: "https://newton.vercel.app/api/v2",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
