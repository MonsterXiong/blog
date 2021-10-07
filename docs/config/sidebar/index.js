const { EngineeringSidebar } = require("./Engineering");
const { CssSidebar } = require("./css");
const { JsSidebar } = require("./JavaScript");
const { OtherSidebar } = require("./Other");

exports.sidebarConfig = {
  ...EngineeringSidebar,
  ...CssSidebar,
  ...JsSidebar,
  ...OtherSidebar,
};
