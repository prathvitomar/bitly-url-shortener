const shortId = require('shortid');
const URL = require('../models/url');

async function handlerCreateShortUrl(req, res){
    const shortId = shortId();
    const body = req.body
    if(!body.url) return res.status(404).json({ message : "Url is required"})
    await URL.create({
        shortId : shortId, redirectUrl: body.url, visiteHistory : []
    })
    return res.json({ msg : "success", shortId})
}

async function handlerGetAnalytics(req, res) {
    const url = req.params.shortId;
    const data = await URL.findOne({url});
    return res.json({
        totalClicks : data.visiteHistory.length,
        analytics : data.visiteHistory
    })
}

module.exports = {
    handlerCreateShortUrl,
    handlerGetAnalytics
}