const knex = require('knex')


const knexInstance = knex({
  client: 'pg',
  connection: DB_URL,
})

const get_recipes = () => {
    return (
    knexIntance 
    .select('*')
    .from(recipes_db)
    .then(res => box.push(res)
    )
    )
};

 module.exports = {
     get_recipes
 }