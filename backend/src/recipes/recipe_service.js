
const recipe_services = {
    getAllRecipes(knex){
      return knex
      .select('*')
      .from('recipes.db');
  }, 

  getAllVeganRecipes(knex){
    return knex
    .select('*')
    .from('recipes_db')
    .where('is_vegan', true)
  },

  insertNewRecipe(knex){
    return knex
    .insert(newRecipe)
    .into('recipe_db')
    .returning('*')
  }

};

 module.exports = recipe_services;