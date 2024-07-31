const express = require('express');
const { getData, filterAndSortData } = require('../controllers/dataController');

const router = express.Router();

router.get('/', getData);
router.get('/filter', filterAndSortData);

module.exports = router;
