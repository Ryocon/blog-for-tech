const router = require('express').Router()

const { User } = require('../../models/')

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const userData = await User.create({
            userName: req.body.username,
            password: req.body.password
        })

        req.session.save(() => {
            req.session.user_id = userData.id
            req.session.userName = userData.userName
            req.session.logged_in = true

            res.json(userData)
            console.log(userData)
        }
        )
    } catch (err) {
        res.status(400).json(err)
        console.log(err)
    }
})


router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { userName: req.body.username}})

        if (!userData) {
            res
            .status(400)
            .json({ message: 'Password or email is incorrect' })
            return
        }

        const correctPassword = await userData.checkPassword(req.body.password)

        if (!correctPassword) {
            res
            .status(400)
            .json({ message: 'Password or email is incorrect' })
            return
        }

        req.session.save(() => {
            req.session.user_id = userData.id
            req.session.logged_in = true

            res.json({ user: userData, message: 'log in successful!' })
        })

    } catch (err) {
        res.status(400).json(err)
    }
})

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end()
        })
    } else {
        res.status(404).end
    }
})

module.exports = router