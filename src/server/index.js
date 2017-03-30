import express from 'express';
import bodyParser from 'body-parser';
import renderApp from './render-app';
import calculator from '../shared/calculator';
import { STATIC_PATH } from '../shared/config';


const app = express();
const parser = bodyParser.json({type: '*/*'});

app.use(STATIC_PATH, express.static('public'));
app.use(STATIC_PATH, express.static('dist'));

app.get("/", (req, res) => {
  res.send(renderApp());
});

app.post("/position", parser, (req, res) => {
  res.send(calculator.position(req.body.lat, req.body.lng));
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
