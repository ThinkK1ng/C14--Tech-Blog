const { Post } = require("../models");

const postData = [
  {
    title: "Task Time!!",
    post_content:
      "Tasking is a task-tracker allows you to organize your personal to-do list items by clicking and dragging them into categories like To Do, In Progress, and Completed.",
    user_id: 3,
  },
  {
    title: "Poke'Pals reaches 1 million users!",
    post_content:
      "All the battlers have gathered. We'll be distributing the million user awards soon!",
    user_id: 1,
  },
  {
    title: "Work Day Scheduler tool's here!",
    post_content:
      "A simple calendar application that allows users to save events for each hour of the day.",
    user_id: 2,
  },
  {
    title: "Tech Blog's been released!",
    post_content:
      "it's time to talk tech. Meet here with other tech enthusiasts and let's get to it.",
    user_id: 5,
  },
  {
    title: "Latest tech news app TechTalker!",
    post_content:
      "TechTalker is a new tech news website where users can post, upvote, and comment on links to news articles. Use Sequelize, an object-relational mapping (ORM) library, to simplify your MySQL queries, add password hashing so that users can create secure passwords, and connect your application to JawsDB, a MySQL add-on for Heroku",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
