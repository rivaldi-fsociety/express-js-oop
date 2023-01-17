const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const middlewareLogging = require('./src/middlewares/logging.middleware')
const petRouter = require('./src/routes/pet.route');
const port = 3001;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.use(middlewareLogging)

app.use('/pet', petRouter);

app.listen(port, '0.0.0.0', () => {
    console.log(`Pet Application Rest API listening at http://localhost:${port}`)
});