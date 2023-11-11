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
    intro: "Lisa's bio intro",
    expertise: "Lisa's expertise",
    goals: "Lisa's goals are...",
    skills: "Lisa's skills are...",
  });
};
