'use strict'

const db = require('./conn');


class Review {
    constructor (id, reviewer_id, title, review, restaurant_id) {
        this.id = id;
        this.reviewer_id = restaurant_id;
        this.title = title;
        this.review = review;
        this.restaurant_id = restaurant_id;
    }
    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM review JOIN restaurant ON restaurant_id = restaurant.id;`);
            console.log(response);
            return response;
        } catch(error) {
            return error;
        }
    }
}


module.exports = Review;