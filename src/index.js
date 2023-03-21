const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/route");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", route);
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("billeasy_assignment", "aditi", "postgrespass", {
    host: 'localhost',
    dialect: 'postgres'
});
sequelize
  .authenticate()
  .then(() => {
    console.log("postgres database is Connected...")
 //const query= sequelize.query("LISTEN employee_trigger")
  })
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 3000, function () {
  console.log("Express is running on port " + (process.env.PORT || 3000));
});
