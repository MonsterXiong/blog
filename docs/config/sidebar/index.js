const { EngineeringSidebar } = require("./Engineering");
const { CssSidebar } = require("./CSS.js");
const { JsSidebar } = require("./JavaScript");
const { NodeSidebar } = require("./NodeJS");
const { OtherSidebar } = require("./Other");
const { InternetSidebar } = require("./Internet");
const { InterviewSidebar } = require("./Interview");

exports.sidebarConfig = {
  ...EngineeringSidebar,
  ...CssSidebar,
  ...JsSidebar,
  ...NodeSidebar,
  ...OtherSidebar,
  ...InternetSidebar,
  ...InterviewSidebar,
};
