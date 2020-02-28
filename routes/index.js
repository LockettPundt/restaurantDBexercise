'use strict'

const express = require('express'),
router = express.Router(),
restaurantModel = require(`../models/restaurant`),
reviewerModel = require('../models/reviewer'),
reviewModel = require('../models/review');

router.get('/', async (req, res) => {
    const dataArray = await restaurantModel.getAll();
    const reviewArray = await reviewModel.getAll();
    res.render('template', {
        locals: {
            title: 'Restaurants',
            reviews: 'Reviews',
            data: dataArray,
            reviewData: reviewArray
        },
        partials: {
            partial: 'partial-index',
            partial2: 'partial-reviews'
        }
    })
});






module.exports = router;