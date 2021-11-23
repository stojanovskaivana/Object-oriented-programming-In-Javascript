
/*A Formula 1 championship race is starting up.
 There are 20 racers that drive 80 laps. Each lap is 10km.
  Every racecar has speed, fuel, and tire health. 
  Every car has a different interval of going to the pit stop. 
  The pit stop refuels the fuel tank and changes the tires,
   however it can change to different tires according to the conditions, 
   and can give the racecar different upgrades every time the car enters the pitstop.
    Each lap, every driver has a 5% chance to crash his car and end the race. Who will win?*/

function Car(name, speed, pitInterval, lapLength) {
    this.name = name;
    this.speed = speed;
    this.pitInterval = pitInterval; // kolku kruga do pitstop
    this.tireHealth = 100;
    this.crashed = false;
    this.fuel = 100;
    this.kilometers = 0;
    this.lastPit = 1;
    this.lastCrashCalculation = 0;

    this.currentLap = function() {
        return Math.ceil(this.kilometers / lapLength);
    }

    this.calculateCrash = function() {
        if (this.currentLap() > this.lastCrashCalculation) {
            console.log("Calculating crash chance for lap " + this.currentLap())
            var isCrashed = calculatePercent(1);

            if (isCrashed) {
                console.warn(`${this.name} has crashed and is out of the race.`);
                return this.crashed = true;
            }
            this.lastCrashCalculation = this.currentLap();
        }
        return false;
    }

    this.shouldPitStop = function() {
        return (this.currentLap() % this.pitInterval) == 0 && this.lastPit != this.currentLap();
    }

    this.doPitStop = function() {
        console.log(`${this.name} is in a pitstop in lap ${this.currentLap()}.`);
        this.tireHealth = 100;
        this.fuel = 100;
        this.lastPit = this.currentLap();
        var doUpgrade = calculatePercent(5);
        if (doUpgrade) {
            this.speed += getRandomNumber(1, 2);
        }

        //da zemam random procent za upgrade ako e true 
        // da dodadam brzina//
        
    }

    this.move = function() {
        this.kilometers += this.speed;
        this.fuel -= this.speed;
        this.tireHealth -= getRandomNumber(this.speed, this.speed+3);
    }

    this.raceLap = function () {
        if (this.crashed) {
            return;
        }

        if (this.calculateCrash()) {
            return;
        }

        if (this.shouldPitStop()) {
            this.doPitStop();
        } else {
            this.move();
        }

        console.log(`[${this.currentLap()}] Car ${this.name} is at ${this.kilometers} km and has fuel ${this.fuel}`);
    }
}