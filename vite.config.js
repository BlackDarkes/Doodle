import { defineConfig } from "vite";

export default defineConfig({
    base: "/Doodle/",
    build: {
        outDir: "build",
    },
    server: {
        port: 3000,
        open: true,
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern",
            }
        }
    }
})