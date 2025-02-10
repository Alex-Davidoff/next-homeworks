'use client';

import { ICarAddProps } from "@/models/ICar";
import { carAddAction } from "@/server-actions/serverActions";
import { carValidator } from "@/validators/car.validator";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";


const CarCreatePage = () => {

    const {handleSubmit, register, formState: {errors}} 
        = useForm<ICarAddProps>({mode: 'all', resolver: joiResolver(carValidator)});

    const customHandler = (formDataProps: ICarAddProps) => {
        carAddAction(formDataProps);
    }

    return(
        <div className="page_car_create">
            <form onSubmit={handleSubmit(customHandler)} className="flex flex-col gap-2 w-60 mx-auto p-4 border border-blue-400">
            <input type="text" {...register('brand')} className="border border-black" placeholder="brand"/>
            <input type="number" {...register('price')} className="border border-black" placeholder="price"/>
            <input type="number" {...register('year')} className="border border-black" placeholder="year"/>
            <button className="border border-blue-600 rounded-md w-40 mx-auto">Create</button>
            <div className="errors_box">
                    <p>{errors?.brand?.message}</p>
                    <p>{errors?.year?.message}</p>
                    <p>{errors?.price?.message}</p>
            </div>
            </form>
        </div>
    )
}

export default CarCreatePage;