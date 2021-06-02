const { GitSidebar } = require("./Git");
const { GulpSidebar } = require("./Gulp");
const { ParcelSidebar } = require("./Parcel");
const { CssSidebar } = require("./CSS.js");
const { JsSidebar } = require("./JavaScript");
const { NodeSidebar } = require("./NodeJS");
const { OtherSidebar } = require("./Other");
const { InternetSidebar } = require("./Internet");

exports.sidebarConfig = {
  ...GitSidebar,
  ...GulpSidebar,
  ...ParcelSidebar,
  ...CssSidebar,
  ...JsSidebar,
  ...NodeSidebar,
  ...OtherSidebar,
  ...InternetSidebar,
};
