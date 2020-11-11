/* eslint-disable strict */

const app = require('./app');
const { PORT, DB_URL } = require('./config');

 const db = knex({
   client: 'pg',
    connection: DB_URL,
  })

  app.set(db)

app.listen(PORT, () => {
  console.log(`server is running effectively at http://localhost:${PORT}`);
});
