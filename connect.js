const db = require('mongoose');
require('dotenv').config();
db.Promise = global.Promise;
    db.connect(process.env.CONNECT_URL,
        { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Db Conectada con Éxito!' + db.connection.readyState);
    //console.log(db.tasks.find())

    module.exports = db