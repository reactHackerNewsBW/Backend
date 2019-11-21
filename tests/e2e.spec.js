// our connection to the database
const db = require("../data/db-config.js");

// the data access file we are testing
const Stories = require("../data/models/models");
const Users = require("../auth/auth-model");
// await db("stories").truncate();
beforeEach(async () => {
  // this function executes and clears out the table before each test
  await db("stories").truncate();
  await db("users").truncate();
});

describe("auth model", () => {
    describe("auth user", () => {
      // this example uses async/await to make it easier to read and understand
      it("should register users and store into the db", async () => {
        // this code expects that the table is empty, we'll handle that below
        // add data to the test database using the data access file
        await Users.register({ username: "sam", password: "o" });
        await Users.register({ username: "peter", password: "p" });
  
        // read data from the table
        const users = await db("users");
        // console.log(JSON.stringify(user))
  
        // verify that there are now two records inserted
        expect(users).toHaveLength(2);
      });

      it("should register users and store into the db", async () => {
        // this code expects that the table is empty, we'll handle that below
        // add data to the test database using the data access file
        await Users.register({ username: "sam", password: "o" });
        await Users.register({ username: "peter", password: "p" });
  
        // read data from the table
        const users = await db("users");
        // console.log(JSON.stringify(user))
  
        // verify that there are now two records inserted
        expect(users).toHaveLength(2);
      });
    });
})

describe("Stories model", () => {
  describe("insert()", () => {
    // this example uses async/await to make it easier to read and understand
    it("should insert the provided stories into the db", async () => {
      // this code expects that the table is empty, we'll handle that below
      // add data to the test database using the data access file
      await Stories.addStories({ title: "Amtrat", url: "https://wwwon" });
      await Stories.addStories({ title: "First Time", url: "google.org" });

      // read data from the table
      const stories = await db("stories");

      // verify that there are now two records inserted
      expect(stories).toHaveLength(2);
    });
  });
  describe("get()", () => {
    // this example uses async/await to make it easier to read and understand
    it("should get the inserted story from the db", async () => {
      // this code expects that the table is empty, we'll handle that below
      // add data to the test database using the data access file
      const storyArr = await Stories.addStories({
        title: "Amtrat",
        url: "https://wwwon"
      });
      const id = storyArr[0].id;
      // read data from the table
      const stories = await Stories.getStoriesByID(id);

      // verify that there are now two records inserted
      expect(stories[0].title).toEqual("Amtrat");
    });

    it("expect title to be of type string", async () => {
        const storyArr = await Stories.addStories({
          title: "Amtrat",
          url: "https://wwwon"
        });
        const id = storyArr[0].id;
        // read data from the table
        const stories = await Stories.getStoriesByID(id);
        // verify that there are now two records inserted
        expect(typeof stories[0].title).toEqual("string");
      });
  });

  describe("get()", () => {
    // this example uses async/await to make it easier to read and understand
    it("should get the inserted story from the db", async () => {
      const storyArr = await Stories.addStories({
        title: "Amtrat",
        url: "https://wwwon"
      });
      const id = storyArr[0].id;
      // read data from the table
      const stories = await Stories.getStoriesByID(id);
      // verify that there are now two records inserted
      expect(stories[0].title).toEqual("Amtrat");
    });
  });
});
