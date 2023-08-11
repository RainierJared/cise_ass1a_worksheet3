 // db.js
 process.env.NODE_CONFIG_DIR = './config'
 const mongoose = require('mongoose');
 const config = require('config');
 const db = config.get('mongodb+srv://qqp2244:jcr7wdgxav019i9g@rainierjareddb.x9og32u.mongodb.net/?retryWrites=true&w=majority');
 
 const connectDB = async () => {
   try {
     mongoose.set('strictQuery', true);
     await mongoose.connect(db, {
       useNewUrlParser: true,
     });
 
     console.log('MongoDB is Connected...');
   } catch (err) {
     console.error(err.message);
     process.exit(1);
   }
 };
 
 module.exports = connectDB;