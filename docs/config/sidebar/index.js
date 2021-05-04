const { GitSidebar } = require("./Git");
const { CssSidebar } = require("./CSS.js");
const { JsSidebar } = require("./JavaScript");
const { NodeSidebar } = require("./NodeJS");

exports.sidebarConfig = {
  ...GitSidebar,
  ...CssSidebar,
  ...JsSidebar,
  ...NodeSidebar,
};
