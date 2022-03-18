const express = require('express')
const verifyToken = require('../middleware/auth')

const {
    login,
    donate,
    fillAdminDashboard
} = require('../controllers/user')

const router = express.Router();

//middleware
router.use('/admin-dashboard', verifyToken)

router.route('/donate', donate)
router.route('/admin-dashboard', fillAdminDashboard)
router.route('/login').post(login)


module.exports = router