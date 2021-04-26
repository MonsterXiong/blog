const { GitSidebar } = require("./Git");
const { CssSidebar } = require("./CSS");
const { JsSidebar } = require("./JavaScript");

exports.sidebarConfig = {
  ...GitSidebar,
  ...CssSidebar,
  ...JsSidebar,
};
