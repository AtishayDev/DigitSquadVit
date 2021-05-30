const express = require('express');
const router = express.Router();

//home page
router.get('/', (req, resp) => {
	resp.render('home');
});

//tech-updates page
router.get('/Tech-Updates', (req, resp) => {
	resp.render('tech-updates');
});

//members page
router.get('/Team', (req, resp) => {
	resp.render('members');
});

//blogs page
router.get('/Blog', (req, resp) => {
	resp.render('blog');
});

router.get('/Blogs', (req, resp) => {
	resp.render('blogs');
});

//events page
router.get('/Events', (req, resp) => {
	resp.render('events');
});

module.exports = router;
