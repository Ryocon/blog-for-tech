const router = require('express').Router()

const { Post } = require('../../models/')

const withAuth = require('../../utils/auth')


router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll({});
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

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