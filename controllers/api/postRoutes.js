const router = require('express').Router()

const { Post } = require('../../models/')

const withAuth = require('../../utils/auth')

// display all posts
router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll({});
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// create a post
router.post('/', withAuth, async, (req, res) =>{
    try {
        const postData = await Post.create({
            ...req.body,
            user_id: req.session.user_id
        })

        res.status(200).json(postData)

    } catch (err) {
        res.status(400).json(err)
    }
})

// edit a post
router.put('/:id', withAuth, async (req, res) => {
    try {
        postData = await Post.update(req.body, { where: { id: req.body.id } })
        res.status(200).render('dashboard', { logged_in: req.session.logged_in })
    } catch (err) {
        res.status(500).json(err)
    }
})

// delete a post
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        })

        if (!postData) {
            res.status(404).json({ message: 'No post with this id found!' })
            return
        }

        res.status(200).json(postData)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router