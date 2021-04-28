const { DailyNav } = require("./Daily");
const { CssNav } = require("./CSS");
const { JavaScriptNav } = require("./JavaScript");
const { NodeNav } = require("./NodeJS");
const { EngineeringNav } = require("./Engineering");
const { InternetNav } = require("./Internet");
const { OtherNav } = require("./Other");
const { InterviewNav } = require("./Interview");

module.exports = [
  DailyNav,
  // CSS
  CssNav,
  // JavaScript
  JavaScriptNav,
  // NodeJS
  NodeNav,
  // 工程化
  EngineeringNav,
  // 网络
  InternetNav,
  // 面试
  InterviewNav,
  // 其它
  OtherNav,
];
