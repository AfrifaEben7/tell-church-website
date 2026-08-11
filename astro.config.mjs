import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://afrifaeben7.github.io",
  base: "/tell-church-website",
  output: "static",
  build: {
    format: "directory"
  },
  vite: {
    build: {
      cssMinify: true
    }
  }
});
