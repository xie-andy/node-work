// Imports
import * as express from 'express';
import * as formidableMiddleware from 'express-formidable';
import * as contactsController from './controllers/contactsController';
import * as homeController from './controllers/homeController';

// Express setup
const port = 3000;
const app = express();

app.set('view engine', 'pug');
app.set('views', './views')

// Middleware setup
app.use(formidableMiddleware());
app.use(express.static('public'));

app.get('/', homeController.index);
app.get('/contacts', contactsController.form);
app.post('/contacts/create', contactsController.createContact);

// Express server startup
app.listen(port);
console.log(`Listening on port number: ${port}`);