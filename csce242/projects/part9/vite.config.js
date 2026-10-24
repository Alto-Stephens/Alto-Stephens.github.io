import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

const projectDirectory = import.meta.dirname;

export default defineConfig({
  root: projectDirectory,
  base: "./",
  plugins: [react()],
  build: {
    outDir: resolve(projectDirectory, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: [
        resolve(projectDirectory, "index.html"),
        resolve(projectDirectory, "games.html"),
        resolve(projectDirectory, "gallery.html"),
        resolve(projectDirectory, "history.html"),
        resolve(projectDirectory, "soundtracks.html"),
        resolve(projectDirectory, "track-preview.html"),
      ],
    },
  },
  server: {
    fs: {
      allow: [resolve(projectDirectory, "..", "..", "..")],
    },
  },
});
