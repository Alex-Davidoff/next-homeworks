'use server';

import { ICarAddProps } from '@/models/ICar';
import sql from 'better-sqlite3';

const db = sql('cars.db');

export const carAddAction = async ({brand, price, year}: ICarAddProps) => {
    const tstr = `insert into cars (brand, price, year) values (?, ?, ?);`;
    db.prepare(tstr).run(brand, price, year);
}