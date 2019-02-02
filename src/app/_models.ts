
export interface Appstate {
	cars: Array<Car>,
	locations: Array<string>
}	

export interface Car {
	Name: string,
	Photo: string,
	Price: number,
	Location: number,
	Availability: Array<any>,
	Seats: number,
	Fuel_Type: string,
	Transmission: string,
	Car_Type: string
}

