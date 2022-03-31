const User = require('./User')
const Post = require('./Post')
const Comments = require('./Comments')

Post.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
})

Post.hasMany(Comments, {
    foreignKey: "post_id",
    onDelete: "CASCADE"
})

Comments.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
})

module.exports = { User, Post, Comments }