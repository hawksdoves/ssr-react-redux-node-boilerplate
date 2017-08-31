import path from 'path';
import express from 'express';
import cors from 'cors';

import handleRender from './handleRender';

const app = express();

const publicPath = express.static(path.join(__dirname, '../assets'));

app.use(cors());
app.use(publicPath);

app.use('/', handleRender);
        
export default app;

