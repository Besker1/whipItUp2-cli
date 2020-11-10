
const recipe_services = {
    getAllRecipes(){
      return knex
      .select('*')
      .from('recipes.db');
  }, 

  getAllVeganRecipes(){
    return
  }

};

 module.exports = recipe_services;