import { CarsComponent } from "@/components/cars/CarsComponent";
import { getAllCars } from "@/services/cars.api";

const CarsPage = async () => {
    const cars = await getAllCars();

    if (cars){
    return(
        <div className="page_cars">
        <CarsComponent cars={cars}/>
        </div>
    )}
}

export default CarsPage;