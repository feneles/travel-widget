import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  const isProduction = command === "build";

  return {
    base: isProduction ? "/travel-widget/" : "/",
    plugins: [react()],
  };
});
