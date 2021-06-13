const { GitSidebar } = require("./Git");
const { GulpSidebar } = require("./Gulp");
const { ParcelSidebar } = require("./Parcel");
const { CLISidebar } = require("./CLI");

exports.EngineeringSidebar = {
  ...GitSidebar,
  ...GulpSidebar,
  ...ParcelSidebar,
  ...CLISidebar,
  "/Engineering/Webpack/": ["", "快速入门"],
};
