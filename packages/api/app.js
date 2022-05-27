import express from 'express';
import cors from 'cors';

import { emailRoutes } from './v1/signUp/signUp.js';


const app = express();
const PORT = process.env.APPSETTING_PORT || 3000;

app.disable('x-powered-by');
app.use(cors());
app.use(express.json());
app.use(emailRoutes);

const server = app.listen(PORT, ()=>{
    console.log(`Server is now running on ${PORT}...`);
});
