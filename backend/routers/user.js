const express = require('express')

const {
    login,
    addPost,
    updatePost,
    deletePost,
    getSinglePost,
    getAllPosts,
    donationHistory
} = require('../controllers/user')

const router = express.Router();


router.route('/login').post(login)


module.exports = router