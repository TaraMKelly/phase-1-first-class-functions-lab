const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function() {
        return drivers.slice(0,2);
}
// const firstTwoDrivers = returnFirstTwoDrivers();

const returnLastTwoDrivers = function() {
    return drivers.slice(-2);
}
// const lastTwoDrivers = returnLastTwoDrivers();

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


let fare = 5;

function createFareMultiplier(multInteger) {    
    return function(fare) {
        return fare * multInteger;
    }
}
createFareMultiplier(5);

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, driverFunction) {
    const firstTwoDrivers = returnFirstTwoDrivers();
    const lastTwoDrivers = returnLastTwoDrivers();
    if (driverFunction === returnFirstTwoDrivers) return firstTwoDrivers;
    if (driverFunction === returnLastTwoDrivers) return lastTwoDrivers;
}