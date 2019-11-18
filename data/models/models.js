const db = require('../db-config');

module.exports = {
    getAllStories,
    getStoriesByID
}

//Get All requests
function getAllStories(){
    return db('stories')
}

function getStoriesByID(id){
    return db('stories').where({ id });
}

//models