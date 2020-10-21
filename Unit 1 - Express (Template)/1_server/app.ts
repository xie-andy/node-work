// Imports
import * as express from 'express';
import * as formidableMiddleware from 'express-formidable';

// Express setup
const port = 3000;
const app = express()

// Middleware setup
app.use(formidableMiddleware());
app.use(express.static('public'));

// Express route
app.get('/', (req, res) => {
  res.send('Hello, Universe!');
});

// Route to handle form data
app.post('/create', (req, res) => {
  console.log(req.fields);
  res.send(`New contact: ${req.fields.name}`);
});

// Express server startup
app.listen(port);
console.log(`Listening on port number: ${port}`);