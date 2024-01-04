import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config()

const app = express();
let Port: any;
process.env.STATUS === 'production' && (Port = process.env.Port)

import 'dotenv/config'
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(Port, () => {
  console.log(`http://localhost:${Port}`);
});