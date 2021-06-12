const { GitSidebar } = require("./Git");
const { GulpSidebar } = require("./Gulp");
const { ParcelSidebar } = require("./Parcel");

exports.EngineeringSidebar = {
  ...GitSidebar,
  ...GulpSidebar,
  ...ParcelSidebar,
  "/Engineering/Webpack/": ["", "快速入门"],
};
