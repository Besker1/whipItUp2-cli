// /* eslint-disable strict */
// const supertest = require('supertest');
// const app = require('../src/app');

describe("App", () => {
  it('GET / responds with 200 containing "Hello, world!"', () => {
    supertest(app).get("/").expect(200, "Hello, world!");
  });
});

describe("", () => {
  let db;
  let recipesTest = [
    {
      title: "Tofu",
      content: ["great", "food", "good"],
    },
  ];
});
