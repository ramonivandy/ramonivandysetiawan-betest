const express = require("express");
const app = express();
const config = require("./bin/helper/global_config");
const port = config.get('/port') || 3001;
const userRouter = require('./bin/app/routes/user');

app.get('/', (req, res) => {
  res.status(200).send('This service is running properly')
})
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}.`);
});

//set route app
app.use('/user', userRouter);
