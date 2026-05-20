import vue from "@vitejs/plugin-vue";
import { setupHtmlPlugin } from "./html";

export function setupVitePlugins(__APP_RELEASE__: string) {
  return [
    vue(),
    setupHtmlPlugin(__APP_RELEASE__),
  ]
}
