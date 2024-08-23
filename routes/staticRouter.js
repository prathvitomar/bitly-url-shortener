const express = require('express');
const {restrictTo} = require("../middleware/auth");
const {
    handleUserSignup,
    handlerUserLogin
} = require("../controllers/user");
const router = express.Router();
const URL = require('../models/url');

router.get('/admin/urls', restrictTo(["ADMIN"]), async (req, res) => {
    const allurls = await URL.find({});
    return res.render("home",{
        urls : allurls
    });
})

router.get('/',restrictTo(["NORMAL", "ADMIN"]), async (req, res)=> {
    const allurls = await URL.find({ createdBy : req.user._id });
    return res.render('home',{
        urls : allurls
    });
})

router.get('/signup', async (req, res) => {
    return res.render('signup')
})

router.get('/signup', async (req, res) => {
    return res.render('login')
})

module.exports = router;