# backend_bookingcare
# pakage.json: default = npm run 
tao db : npx sequelize-cli db:create
tao model: npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
tao mig: npx sequelize-cli migration:generate --name migration-example
tao table trong db:  npx sequelize-cli db:migrate

------------

parameters
'/user/:id' => GET http://localhost:3000/user/123   const userId = req.params.id;

GET http://localhost:3000/search?q=nodejs&limit=5 =>  const query = req.query.q;
