const express = require("express");
const typeorm = require("typeorm");
const Wilder = require('./entity/Wilder')

const dataSource = new typeorm.DataSource({
  type: "sqlite",
  database: "./wildersdb.sqlite",
  synchronize: true,
  entities: [Wilder],
});

const app = express();

app.get("/hello", (req, res) => {
  console.log("noice");
  res.send("Noiceuuu !");
});

const start = async () => {
  await dataSource.initialize();
  dataSource.getRepository(Wilder).save({name : 'FirstWilder'})
  app.listen(3000, () => {
    console.log("listening on port 3000");
  });
};

start();