// our connection to the database
const db = require('../data/db-config.js');

// the data access file we are testing
const Stories = require('../data/models/models');

beforeEach(async () => {
    // this function executes and clears out the table before each test
    console.log("b4 each is called ---> yes!")
    await db('stories').truncate();
  });

describe('Stories model', () => {
  describe('insert()', () => {
    // this example uses async/await to make it easier to read and understand
    it('should insert the provided stories into the db', async () => {
      // this code expects that the table is empty, we'll handle that below
      // add data to the test database using the data access file
      await Stories.addStories({title: 'Amtrat', url: "https://wwwon"});
      await Stories.addStories({title: 'First Time', url: "google.org"});

      // read data from the table
      const stories = await db('stories');

      // verify that there are now two records inserted
      expect(stories).toHaveLength(2);
    });
    
  });
  describe('get()', () => {
    // this example uses async/await to make it easier to read and understand
    it('should get the inserted story from the db', async () => {
      // this code expects that the table is empty, we'll handle that below
      // add data to the test database using the data access file
      const storyArr = await Stories.addStories({title: 'Amtrat', url: "https://wwwon"});
      const id = storyArr[0].id
      // read data from the table
      const stories = await Stories.getStoriesByID(id);


      // verify that there are now two records inserted
      expect(stories[0].title).toEqual('Amtrat');
    });
  });
});