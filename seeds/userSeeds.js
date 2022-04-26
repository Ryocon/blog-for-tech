const { User } = require('../models');

const userData = [
  {
    id:1,
    userName: 'Sylvia',
    password: "Plath123",
    
  },
  { 
    id:2,
    userName: 'Jack',
    password: "Rose123",
  },
  { 
    id:3,
    userName: 'Antonio',
    password: "Maria123",
  },
  { 
    id:4,
    userName: 'Anabelle',
    password: "Home123",
  },
  { 
    id:5,
    userName: 'Justine',
    password: "Just123",
  },
];

const seedUser = () => User.bulkCreate(userData,{
  individualHooks:true,
  returning:true
});

// module.exports = seedUser;

module.exports = seedUser