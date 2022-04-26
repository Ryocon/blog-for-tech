const { Comments } = require('../models');

const commentData = [
  {id:1,
    comment: 'Nice point of view',
    user_id:5,
    post_id:4
  },
  {id:2,
    comment: 'I really like your post',
    user_id:1,
    post_id:2
  },
  {id:3,
    comment: 'Fascinating',
    user_id:3,
    post_id:3
},
  
];

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;