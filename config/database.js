const mongoose = require('mongoose');

const connectDatabase = () =>{
    mongoose.connect(process.env.DB_CONNECTION_URL,{}).then(con => {
        console.log(`Connection to mongo with host ${con.connection.host} has been established`);
    })
}

module.exports = connectDatabase;