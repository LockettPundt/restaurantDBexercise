'use strict'

const db = require('./conn');

class Reviewer {
    constructor (id, name, email, karma) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.karma = karma;
    }

    
    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM reviewers;`);
            return response;
        } catch(error) {
            return error;
        }
    }
}

module.exports = Reviewer;