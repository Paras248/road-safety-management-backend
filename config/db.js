const mongoose = require('mongoose');

const connectDb = async () => {
    await mongoose
        .connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(console.log('DB CONNECTED SUCCESSFULLY'))
        .catch((err) => {
            console.log('DB ERROR ' + err);
            process.exit(1);
        });
};

module.exports = connectDb;
