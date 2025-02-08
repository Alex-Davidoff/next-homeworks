import { addCar } from "@/services/cars.api";
import Form from "next/Form";

type SPProps = {
    searchParams: Promise<{
        [key: string]: string | string[] | undefined
    }>
}

const CarCreatePage = async ({searchParams}: SPProps) => {
    let awaitedSP = await searchParams;

    if (awaitedSP) {
        if (awaitedSP?.brand && awaitedSP?.price && awaitedSP?.year) {
            await addCar({
                "brand" : awaitedSP.brand,
                "price" : Number(awaitedSP.price),
                "year" : Number(awaitedSP.year)
            });
            awaitedSP = {};
        } 
    } 


    return(
        <div className="page_carcreate">
            <Form action={''} className="flex flex-col gap-2 w-60 mx-auto p-4 border border-blue-400">
            <input type="text" name={'brand'} className="border border-black" placeholder="brand"/>
            <input type="number" name={'price'} className="border border-black" placeholder="price"/>
            <input type="number" name={'year'} className="border border-black" placeholder="year"/>
            <button className="border border-blue-600 rounded-md w-40 mx-auto">Create</button>
            </Form>
        </div>
    )
}

export default CarCreatePage;