import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react()
    // mode === 'development' &&
    // componentTagger(),
  ].filter(Boolean),
<<<<<<< HEAD
  base: "/oussama-tabzioui/",
=======
  base:"oussama-tabzioui",
>>>>>>> 3f607f5054a87550256c7cf8e92fbd6dce9741d6
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
