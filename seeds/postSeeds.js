const { Post } = require('../models');

const postData = [
  {
    id:1,
    title: 'Tech Blog',
    content:"what a mess!",
    user_id:5
  },
  {
    id:2,
    title: 'Tech Blog',
    content:"Is this working?!",
    user_id:1
  },
  {
    id:3,
    title: 'Tech Blog',
    content:"Do we get an ID?!",
    user_id:2
  },
  {
    id:4,
    title: 'Tech Blog',
    content:"what a mess!",
    user_id:4
  },
  {
    id:5,
    title: 'Tech Blog',
    content:"Why is this happening to me??!",
    user_id:3
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;