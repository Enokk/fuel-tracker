import express from 'express';
import fs from 'fs';
import sqlite from 'sqlite3';
import cors from 'cors';

const PORT = 3001;
const DB_NAME = 'data.db';

if(!fs.existsSync(DB_NAME)) {
  fs.writeFileSync(DB_NAME, '');
}

const db = new sqlite.Database(DB_NAME, sqlite.OPEN_READWRITE);
db.run('create table if not exists refuelings(fromDate, toDate, fromKm, toKm, fuelLt, fuelCost)');
db.close();

const server = express();
server.use(cors());

server.get('/api/refuelings', (req, res, next) => {
  const db = new sqlite.Database(DB_NAME, sqlite.OPEN_READWRITE);
  db.all('select * from refuelings', [], (err, rows) => {res.send(rows)});
  db.close();
});

server.use(express.static('public'));
server.use(express.static('deployment/public'))

server.listen(PORT, () => {console.log(`Started on ${PORT}`)});