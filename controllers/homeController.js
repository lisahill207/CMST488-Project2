const resources = require("../models/resources");

exports.showIndex = (req, res) => {
  res.render("index", {
    title: "index",
  });
};

exports.showResources = (req, res) => {
  // TODO: Implement render for showResources
  res.render("resources", {
    title: "resources",
    resources
  });
};

exports.showBio = (req, res) => {
  // TODO: Implement render for showBio with properties for:
  // title
  // intro
  // expertise
  // goals
  // skills
  res.render("bio", {
    title: "Lisa's bio",
    intro: "Lisa Hill: Front-End Developer",
    expertise: "Lisa's expertise is in creating dynamic websites",
    goals: "Lisa's goals is to obtain fulltime employment as a front-end developer",
    skills: "Lisa's skills are HTML, CSS, and JS",
  });
};
