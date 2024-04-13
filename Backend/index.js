const port = 4000;
const app = require('./app');
const db = require('./config/db');
const userModel = require('./model/user');

db();


// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));