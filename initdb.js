import sql from 'better-sqlite3';
const db = sql('cars.db');

db.prepare('create table if not exists cars (id integer primary key autoincrement, brand text, price integer, year integer);')
.run();