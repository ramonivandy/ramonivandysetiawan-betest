const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const config = require("./bin/helper/global_config");
const port = config.get("/port") || 3001;
const { connectToDatabase } = require("./bin/helper/database/mongodb/mongodb");
const { runConsumerUser } = require('./bin/modules/user/kafka/consumer')
const userRouter = require("./bin/app/routes/user");

// database
connectToDatabase();

//kafka
runConsumerUser();

app.get("/", (req, res) => {
  res.status(200).send("This service is running properly");
});
// create application/json parser
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//set route app
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}.`);
});
