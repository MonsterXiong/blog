const { GitSidebar } = require("./Git");
const { CssSidebar } = require("./CSS.js");
const { JsSidebar } = require("./JavaScript");
const { NodeSidebar } = require("./NodeJS");
const { OtherSidebar } = require("./Other");

exports.sidebarConfig = {
  ...GitSidebar,
  ...CssSidebar,
  ...JsSidebar,
  ...NodeSidebar,
  ...OtherSidebar,
};
