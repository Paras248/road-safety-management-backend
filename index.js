const app = require('./app');
const connectDb = require('./config/db');

connectDb();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log('Server started successfully at ' + PORT);
});
