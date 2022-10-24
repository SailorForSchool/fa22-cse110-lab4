let statistics = {
	redCars: 21,
	blueCars: 45,
	greenCars:12,
	raceCars: 5,
	blackCars: 40,
	rareCars: 2
};

for (const car in statistics){
	let stat = statistics[car]
	let isOdd = Boolean(stat % 2)
	if (car.charAt(0) == 'r'){
		console.log(stat)
	}
	else if (isOdd){
		console.log(stat)
	}
}
