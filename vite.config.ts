import type { UserConfig, ConfigEnv } from "vite";

import { defineConfig, loadEnv } from "vite";
import {fileURLToPath, URL} from "node:url";
import { cwd } from 'node:process'
import pkg from "./package.json";
import { setupVitePlugins } from "./build/plugins";

// https://vite.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, cwd()) as unknown as ImportMetaEnv;
  const {
    VITE_INTERNAL_VERSION,
  } = env;

  const __APP_VERSION__ = [pkg.version, VITE_INTERNAL_VERSION].join(".");
  const __APP_BUILD_TIME__ = new Date().toLocaleString();
  const __APP_RELEASE__ = [__APP_VERSION__, __APP_BUILD_TIME__, mode].join('@')

  return {
    plugins: setupVitePlugins(__APP_RELEASE__),
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    define: {
      __APP_VERSION__: JSON.stringify(__APP_VERSION__),
      __APP_BUILD_TIME__: JSON.stringify(__APP_BUILD_TIME__),
    }
  }
})
