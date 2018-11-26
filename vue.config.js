const fs = require("fs");
const glob = require("glob");
// const px2vw = require("postcss-px-to-viewport")

const pages = {};
let entries;
try {
  // 获取相关入口
  entries = glob("src/pages/*/main.js", { sync: true });
} catch (err) {
  entries = [];
  throw err;
}
// 格式化生成入口
entries.forEach(file => {
  // file字符串为 src/pages/.../index.js
  const fileSplit = file.split("/");
  const pageName = fileSplit[2];
  let pageHtml = fileSplit.slice(0, 3).join("/") + "/index.html";
  if (!fs.existsSync(pageHtml)) {
    // 入口如果不配置直接使用 _default.html
    pageHtml = fileSplit.slice(0, 2).join("/") + "/_default.html";
  }
  pages[pageName] = {
    entry: file,
    template: pageHtml,
    filename: `${pageName}.html`
  };
});
module.exports = {
  pages
};
