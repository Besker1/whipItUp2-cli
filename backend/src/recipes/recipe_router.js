/* eslint-disable strict */
const express = require('express');
const {v4: uuid} = require('uuid');
const recipe_Router = express.Router();
const jasonParser = express.json();
const logger = require('../logger');
const {recipes, recipe_lists} = require('./Dummy_db');


recipe_Router
  .route('/recipe')
  .get((req, res) => {
    // move implementation logic into here
    req.json(recipes);
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
    const id = uuid();
  
    const recipe = {
      id,
      title,
      content
    };
    
    recipes.push(recipe);
  
    //// log the recipe creation and send a response including a location header.
  
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