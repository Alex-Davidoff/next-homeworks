import { ICar } from "@/models/ICar"

interface ICarsProps {
    cars: ICar[];
}

export const CarsComponent = ({cars}: ICarsProps) => {
    if (cars) {
        return(
            <div className="component_cars">
            {cars.map((car) => (
                <div key={car.id} className="car flex gap-4">
                    <h3>{car.brand}</h3>
                    <p>{car.year}</p>
                    <p>{car.price}$</p>
                </div>
            ))}
            </div>
        )
    }
}