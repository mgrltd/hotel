// src/app.ts
import express from 'express';
import { Request, Response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { DB_URL,PORT,ENV_NAME } from './environment';
import UserApis from './controller/UserController';
import RoleApis from './controller/RoleController';

const app = express();
const port = PORT;

mongoose.connect(DB_URL)
  .then(() => {
    console.log('Connected to MongoDB');
    })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(bodyParser.json());
// helow api
app.get('/', (req, res) => {
  res.send('Helow');
});
// Use user routes
app.use('/user', UserApis);

// Use role routes
app.use('/role', RoleApis);




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Env_name:  ${ENV_NAME}`)
});
