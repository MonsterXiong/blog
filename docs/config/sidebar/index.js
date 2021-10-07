const { EngineeringSidebar } = require("./Engineering");
const { CssSidebar } = require("./CSS");
const { JsSidebar } = require("./JavaScript");
const { OtherSidebar } = require("./Other");

exports.sidebarConfig = {
  ...EngineeringSidebar,
  ...CssSidebar,
  ...JsSidebar,
  ...OtherSidebar,
};
