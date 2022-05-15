const router = require('express').Router()

const withAuth = require('../utils/auth')

const {Post, User} = require('../models')

router.get('/', withAuth, async (req, res) => {
    try{
        const allPost = await Post.findAll({
            include: [User],
            where: {
                user_id: req.session.user_id
            }
        })
        const posts = allPost.map(post => post.get({plain: true}))
        
        res.render('dashboard', {posts, user_id: req.session.user_id})
    } catch (err) {
        console.log(err, 'Bad :(')
    }
})

module.exports = router