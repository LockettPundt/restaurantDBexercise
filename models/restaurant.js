'use strict'

const db = require('./conn');


class Restaurant {
    constructor (id, name, distance, stars, category, favorite_dish, last_time_you_ate_there, does_takeout, address) {
        this.id = id;
        this.name = name;
        this.distance = distance;
        this.stars = stars;
        this.category = category;
        this.favorite_dish = favorite_dish;
        this.last_time_you_ate_there = last_time_you_ate_there;
        this.does_takeout = does_takeout;
        this.address = address
    }

    static async getAll() {
        try {
            //console.log(`it's getting to this point`);
            const response = await db.any(`SELECT * FROM restaurant ORDER BY stars DESC;`);
            return response;
        } catch(error) {
            return error;
        }
    }
}

module.exports = Restaurant;