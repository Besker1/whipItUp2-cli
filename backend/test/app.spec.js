// /* eslint-disable strict */
// const supertest = require('supertest');
// const app = require('../src/app');

describe("App", () => {
  it('GET / responds with 200 containing "Hello, world!"', () => {
    supertest(app).get("/").expect(200, "Hello, world!");
  });
});

describe("getall recipes", () => {
  let db;
  let recipesTest = [
    {
      title: "Tofu",
      content: ["great", "food", "good"],
      img: "image",
      meal: "dinner",
      is_vegan: true,
    },
    {
      title: "Tofu",
      content: ["great", "food", "good"],
      img: "image",
      meal: "lunch",
      is_vegan: false,
    },
    {
      title: "Tofu",
      content: ["great", "food", "good"],
      img: "image",
      meal: "breakfast",
      is_vegan: false,
    },
  ];

  before(() => {
    db = knex({
      client: "pg",
      connection: process.env.TEST_DB_URL,
    });
  });
});
