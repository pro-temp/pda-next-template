import { defineConfig } from "umi";

export default defineConfig({
  mfsu: false,
  deadCode: {},
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
    { path: "/settings", component: "settings" },
  ],
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  npmClient: "yarn",
});
