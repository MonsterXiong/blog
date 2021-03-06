const { DailyNav } = require("./Daily");
const { JavaScriptNav } = require("./JavaScript");
const { EngineeringNav } = require("./Engineering");
const { OtherNav } = require("./Other");
const {CssNav} =require('./CSS')
module.exports = [
  DailyNav,
  // CSS
  CssNav,
  // JavaScript
  JavaScriptNav,
  // NodeJS
  // 工程化
  EngineeringNav,
  // 其它
  OtherNav,
  {
    text: "👊源码",
    link: "/Code/",
  },
  {
    text: "😍 Node",
    link: "https://monsterxiong.github.io/Node/",
  },
  {
    text: "👷GitHub",
    link: "https://github.com/MonsterXiong/blog",
  },
];
