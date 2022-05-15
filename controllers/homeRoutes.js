const router = require('express').Router()

const { Comments, User, Post } = require('../models')

const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [User]
        })

        const posts = postData.map((post) => post.get({ plain: true }))

        res.render('homepage', { posts, user_id: req.session.user_id })
    } catch (err) {
        res.status(500).json(err)
    }
}) 

router.get('/post/:id', async (req,res)=>{
    console.log(req.params.id, "is this coming through?")
    try{
        const onePost= Post.findByPk(
            req.params.id ,
            {
          
            include:[User]
        })
        if(onePost){
            const post = (await onePost).get({plain:true})
            console.log(post, 'does this work?')
           return res.render('singlePost',{post})
        }
        else{
            res.status(404).end();
        }
       
    }catch(err){
        console.log(err)
    }
})

// render log in
router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/')
        return
    }

    res.render('login')
})

// render sign up
router.get('/signUp', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/')
        return
    }

    res.render('signUp')
})






module.exports = router