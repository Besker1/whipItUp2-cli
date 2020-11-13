
const recipe_services = {
    getAllRecipes(knex){
      return knex
      .select('*')
      .from('recipes_db');
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
  },

  getRecipesById(knex, id) {
   return knex.from('recipes_db').select('*').where('id', id).first()
    },

  deleteRecipes(knex, id) {
       return knex('recipes_db')
          .where({ id })
          .delete()
      },

  updateRecipes(knex, id, newRecipeValues){
      return knex('recipes_db')
         .where({ id })
         .update(newRecipeValues)
       },


};

 module.exports = recipe_services;