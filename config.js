System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "tpluscode/md-ed": "github:tpluscode/md-ed@master",
    "github:tpluscode/md-ed@master": {
      "marked": "npm:marked@0.3.6"
    }
  }
});
