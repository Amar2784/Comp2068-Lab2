// Require in express
const express = require('express');
const doMath = require('./math');

// init express 
const app = express();
const PORT = 3000;

app.get('/', doMath);

// port 3000
app.listen(PORT);
console.log(`Application is listening on http://localhost:${PORT}`);
