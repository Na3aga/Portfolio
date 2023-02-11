import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import { createHtmlPlugin } from 'vite-plugin-html'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react({
        babel: {
          plugins: [
            ['babel-plugin-styled-components', { ssr: false, pure: true, displayName: true, fileName: true }]
      ]}}),
      svgrPlugin({
        svgrOptions: {
          icon: true,
          // ...svgr options (https://react-svgr.com/docs/options/)
        },
      }),
      createHtmlPlugin({
        inject: {
          data: {
            env: {
              NODE_ENV: process.env.NODE_ENV,
              REACT_APP_CLIENT_TOKEN: process.env.REACT_APP_CLIENT_TOKEN,
              REACT_APP_ENV: process.env.REACT_APP_ENV,
            },
          },
        },
        minify: true,
      }),
      checker({
        // e.g. use TypeScript check
        typescript: true,
      }),
      ],
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src"),
      },
    },
    server: {
      port: 3000,
    },
    build: {
      outDir: "build",
    },
  };
});