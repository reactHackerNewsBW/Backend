const db = require('../db-config');

module.exports = {
    getAllStories,
    getStoriesByID,
    addStories,
    updateStories,
    removeStories,
    getAllStoriesAuth,
    getStoriesByIDAuth,
    addStoriesAuth,
    updateStoriesAuth,
    removeStoriesAuth
}
////////////////////////////UN-AUTHORIZED ROUTES\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
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
      .then(([id]) => getStoriesByID(id));
  }

function updateStories(id, changes) {
    return db('stories')
      .where('id', id)
      .update(changes)
      .then(count => (count > 0 ? getStoriesByID(id) : null));
  }

function removeStories(id) {
    return db('stories')
      .where('id', id)
      .del();
  }

  ////////////////////////////AUTHORIZED ROUTES\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  //Get All requests
function getAllStoriesAuth(){
    return db('auth-stories')
}

function getStoriesByIDAuth(id){
    return db('auth-stories').where({ id });
}

function addStoriesAuth(stories) {
    return db('auth-stories')
      .insert(stories)
      .then(([id]) => getStoriesByID(id));
  }

function updateStoriesAuth(id, changes) {
    return db('auth-stories')
      .where('id', id)
      .update(changes)
      .then(count => (count > 0 ? getStoriesByID(id) : null));
  }

function removeStoriesAuth(id) {
    return db('auth-stories')
      .where('id', id)
      .del();
  }

//models