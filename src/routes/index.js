const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
	res.render('index.html');
	//console.log(path.join(__dirname, 'views/index.html'));
});

router.get('/vices', (req, res) => {
	res.render('vices.html');
});

router.get('/proyectos', (req, res) => {
	res.render('proyectos.html');
});

router.get('/aboutus', (req, res) => {
	res.render('about.html');
});

router.get('/lagarto', (req, res) => {
	res.render('lagarto.html');
});


module.exports = router;