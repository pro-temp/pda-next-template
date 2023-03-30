import { defineConfig } from "umi";

export default defineConfig({
  mfsu: false,
  plugins: [
    "thea-mobile/dist/cjs/plugins/styles",
    "thea-mobile/dist/cjs/plugins/layout",
    "@umijs/plugins/dist/request",
    "@umijs/plugins/dist/model",
  ],
  request: {},
  model: {},
  routes: [
    { path: "/", component: "index" },
    { path: "/login", component: "login" },
  ],
  npmClient: "yarn",
});
