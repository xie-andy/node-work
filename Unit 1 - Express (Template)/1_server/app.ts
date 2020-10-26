// Imports
import * as express from 'express';
import * as formidableMiddleware from 'express-formidable';
import * as contactsController from './controllers/contactsController';

// Express setup
const port = 3000;
const app = express()

// Middleware setup
app.use(formidableMiddleware());
app.use(express.static('/public'));

// Express route
app.get('/', (req, res) => {
	res.send('Hello, Universe!');
});

// Controller routes
app.post('/create', contactsController.createContact);

// Express server startup
app.listen(port);
console.log(`Listening on port number: ${port}`);