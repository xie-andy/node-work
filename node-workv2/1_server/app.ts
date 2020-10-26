// Imports
import * as express from 'express';

// Express setup
const port = 3000;
const app = express();

// Express route
app.get('/', (req: any, res: any) => {
  res.send('Hello, Universe!');
});

// Express server startup
app.listen(port);
console.log(`Listening on port number: ${port}`);