import { addCar } from "@/services/cars.api";

type SPProps = {
    searchParams: Promise<{
        [key: string]: string | string[] | undefined
    }>
}

const CarCreateSubmit = async ({searchParams}: SPProps) => {
    const awaitedSP = await searchParams;

    if (awaitedSP) {
        if (awaitedSP?.brand && awaitedSP?.price && awaitedSP?.year) {
            await addCar({
                "brand" : awaitedSP.brand,
                "price" : Number(awaitedSP.price),
                "year" : Number(awaitedSP.year)
            });
            
        } 
    } 

    return(
        <>
        </>
    )
}

export default CarCreateSubmit;