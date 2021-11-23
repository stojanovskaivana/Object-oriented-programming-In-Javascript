window.getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.calculatePercent = function (percent) {
    return (100 - percent) <= getRandomNumber(0, 100);
}