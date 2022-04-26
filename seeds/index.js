const sequelize = require('../config/connection');
const seedComments = require('./commentsSeeds');
const seedPost = require('./postSeeds');
const seedUser = require('./userSeeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
   await seedUser();
  console.log('\n----- USER SEEDED -----\n');

  await seedPost();
  console.log('\n----- POST SEEDED -----\n');

  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

 



  process.exit(0);
};

seedAll();