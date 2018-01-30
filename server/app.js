console.log('index.js');
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser'
import routes from './routes';
const app = express()
mongoose.connect('mongodb://localhost:27017/projection_db', () => {
    console.log('Connected to mongodb...');
});
//pulls from app.js, now we have access from app anywhere we want to
//not just one file.

//middleware
app.use(bodyParser.json());

//so everything that involves our API //specifically our CRUD functionality, just so we can distinguish the 
//routes that involve our CRUD functions. 
app.use('/api', routes);
//this makes sense aswell!!!! remember the /get/post//etc, it's literally an API
//as it's essentially like calling these functions within a class, e.g. class.getName

export default app;