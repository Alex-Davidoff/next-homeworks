import { ICar, ICarAddProps } from "@/models/ICar";
import axios from "axios";

const apiBaseURL = 'http://185.69.152.209/carsAPI/v1';

const axiosInstance = axios.create({
    baseURL: apiBaseURL
});

export const getAllCars = async (): Promise<ICar[]> => {
    const {data} = await axiosInstance.get('/cars');
    return data;
}

export const addCar = async (car:ICarAddProps): Promise<void> => {
    console.log(car);
    await axiosInstance.post('/cars', car); 
}