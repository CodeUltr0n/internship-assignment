const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: "Dr. Serena Blake’s Practice" });
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/services', (req, res) => {
  res.render('services');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

router.get('/faq', (req, res) => {
  res.render('FAQ');
});


module.exports = router;