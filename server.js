const express = require('express');
const routes = require('./routes/index');

const app = express();

const PORT = process.env.PORT || 5000;

app.use('/', routes);

app.listen(PORT, () => {
	console.log(`Service is running on port ${PORT}`);
});