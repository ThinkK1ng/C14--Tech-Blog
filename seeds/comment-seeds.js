const { Comment } = require("../models");

const commentData = [
  {
    user_id: 1,
    post_id: 5,
    comment_text: "This is amazing!",
  },
  {
    user_id: 4,
    post_id: 4,
    comment_text: "Could still use some work. Passable for now.",
  },
  {
    user_id: 6,
    post_id: 4,
    comment_text: "Nice job. Keep it up.",
  },
  {
    user_id: 5,
    post_id: 5,
    comment_text: "We just reached a million subscribers! Fantastic!",
  },
  {
    user_id: 2,
    post_id: 2,
    comment_text: "This is great news!",
  },
  {
    user_id: 3,
    post_id: 4,
    comment_text:
      "This is our biggest feature yet!",
  },
  {
    user_id: 5,
    post_id: 3,
    comment_text: "Extremely useful!",
  },
  {
    user_id: 2,
    post_id: 1,
    comment_text: "Nice!",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
