/* eslint-disable strict */
const express = require('express');
const {v4: uuid} = require('uuid');
const recipe_Router = express.Router();
const jasonParser = express.json();
const logger = require('../logger');
const recipes = require('./recipe_service.js');


recipe_Router
  .route('/recipe')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db')
    recipes.getAllRecipes(knexInstance)
    .then(recipes => {
      res.json(recipes)
    }).catch(next)
  })

  .post(jasonParser, (req, res) => {
    // move implementation logic into here
    const {title, content } = req.body;
    if (!title) {
      logger.error('Title is required');
      return res
        .status(400)
        .send('Invalid data');
    }
    
    if (!content) {
      logger.error('Content is required');
      return res
        .status(400)
        .send('Invalid data');
    }    
    
    const { title, content, meal,regularity, img } = req.body

    const id = uuid();
    const newRecipe = {
      id,
      title,
      content,
      meal,
      regularity,
      img
    };
    recipes.insert_new_recipe(
      req.app.get('db'),
      newRecipe
    )
      .then(recipe => {
        res
          .status(201)
          .location(`/recipe/${recipe.id}`)
          .json(recipe)
      })
      .catch(next)
    //// log the new recipe creation and send a response including a location header.
  
    logger.info(`recipe with id ${id} created`);
  
    res
      .status(201)
      .location(`http://localhost:8000/recipes/${id}`)
      .json(recipes);

  });
  

//recipe route with ids
recipe_Router
  .route('/recipe/:id')
  .get((req, res) => {

    const { id } = req.params;
    const recipe = recipes.find(c => c.id === id);

    // looking for the recipe
    if (!recipe) {
      logger.error(`recipe with id ${id} not found.`);
      return res
        .status(404)
        .send('recipe Not Found');
    }

    res.json(recipe);

  })

  /// search the recipe and by id
  .delete((req, res) => {

    const { id } = req.params;

    const recipeIndex = recipes.findIndex(c => c.id === id);

    if (recipeIndex === -1) {
      logger.error(`recipe with id ${id} not found.`);
      return res
        .status(404)
        .send('Not found');
    }

    //delete recipe from recipe lists

    recipe_lists.forEach(list => {
      const recipeIds = list.cardIds.filter(cid => cid !== id);
      list.recipeIds = recipeIds;
    });

    recipes.splice(recipeIndex, 1);

    logger.info(`recipe with id ${id} deleted.`);

    res
      .status(204)
      .end();

  });


  ///vegan recipe routers 



module.exports = recipe_Router;