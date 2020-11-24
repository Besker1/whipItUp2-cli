const { expect } = require("chai");
const knex = require("knex");
const app = require("../src/app");
const { recipesTest } = require("./RecipesTest");

describe.only("Recipes Enpoints", function () {
  let db;

  before("make knex instance", () => {
    db = knex({
      client: "pg",
      connection: process.env.TEST_DATABASE_URL,
    });
    app.set("db", db);
  });

  after("disconnect from db", () => db.destroy());

  before("clean the table", () => db("recipes_table").truncate());
  afterEach("cleanup", () => db("recipes_table").truncate());

  describe(`GET /recipess`, () => {
    context(`if theres is no recipes`, () => {
      it(`responds with 200 and an empty list`, () => {
        return supertest(app).get("/recpes").expect(200, []);
      });
    });
  });

  context("Given there are recipes in the database", () => {
    let db;

    beforeEach("insert recipes", () => {
      return db.into("recipes_table").insert(recipesTest);
    });

    it("GET /recipe responds with 200 and all of the recipes", () => {
      return supertest(app).get("/recipes").expect(200, recipesTest);
    });
  });
});
