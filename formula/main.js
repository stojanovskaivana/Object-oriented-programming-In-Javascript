function race() {
    var totalKilometers = 800;
    var lapLength = 10;

    var cars = [];

    for (var i = 0; i < 20; i++) {
        var car = new Car("Kola " + i, getRandomNumber(1, 10), getRandomNumber(3, 5), lapLength);
        cars.push(car);
    }

    var zavrseni = [];


    while (true) {
        var zavrsijaSite = true;

        for (var i = 0; i < cars.length; i++) {
            var car = cars[i];
            if (!car.crashed && car.kilometers < totalKilometers) {
                car.raceLap();
                console.log("-".repeat(30));

                if (car.kilometers >= totalKilometers) {
                    zavrseni.push(car);
                }

                zavrsijaSite = false;
            }

        }

        if (zavrsijaSite) {
            break;
        }
    }


    for (var i = 0; i < zavrseni.length; i++) {
        var car = zavrseni[i];
        console.log(car.name + " finished in position " + (i + 1))
    }
    for (var i = 0; i < cars.length; i++) {
        var car = cars[i];
        if (car.crashed) {
            console.log(car.name + " se sudri i ne ja zavrsi trkata ");
        }
    }
}

race();