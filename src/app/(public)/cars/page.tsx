import { CarsComponent } from "@/components/cars/CarsComponent";
import { getAllCars } from "@/services/cars.api";

const CarsPage = async () => {
    const cars = await getAllCars();

    if (cars){
    return(
        <CarsComponent cars={cars}/>
    )}
}

export default CarsPage;