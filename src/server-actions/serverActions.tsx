'use server';

import sql from 'better-sqlite3';

const db = sql('cars.db');

export const carAddAction = async (formdata: FormData) => {
    console.log(formdata);
    const brand = formdata.get('brand');
    const price = formdata.get('price');
    const year = formdata.get('year');
    const tstr = `insert into cars (brand, price, year) values (?, ?, ?);`;
    db.prepare(tstr).run(brand, price, year);
}