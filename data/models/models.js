const db = require('../db-config');

module.exports = {
    getAllStories,
    getStoriesByID,
    addStories,
    updateStories,
    removeStories
}

//Get All requests
function getAllStories(){
    return db('stories')
}

function getStoriesByID(id){
    return db('stories').where({ id });
}

function addStories(stories) {
    return db('stories')
      .insert(stories)
      .then(([id]) => this.get(id));
  }

function updateStories(id, changes) {
    return db('stories')
      .where('id', id)
      .update(changes)
      .then(count => (count > 0 ? this.get(id) : null));
  }

function removeStories(id) {
    return db('stories')
      .where('id', id)
      .del();
  }

//models