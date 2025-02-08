import { ICar } from "@/models/ICar";

const baseURL = 'http://185.69.152.209/carsAPI/v1';

export const getAllCars = async (): Promise<ICar[]> => {
    const respObj = await fetch(baseURL+'/cars')
    .then((response) => response.json());
    return respObj;
}