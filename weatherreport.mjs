import { expect } from "chai";

function sensorStub() {
    return {
        temperatureInC: 50,
        precipitation: 70,
        humidity: 26,
        windSpeedKMPH: 52
    };
}

function highPrecipitationStub() {
    return {
        temperatureInC: 30,
        precipitation: 70,
        humidity: 50,
        windSpeedKMPH: 40
    };
}

function report(sensorReader) {
    const readings = sensorReader();
    let weather = "Sunny Day";

    if (readings.temperatureInC > 25) {
        if (readings.precipitation >= 20 && readings.precipitation < 60) {
            weather = "Partly Cloudy";
        } else if (readings.windSpeedKMPH > 50) {
            weather = "Alert, Stormy with heavy rain";
        }
    }
    return weather;
}

function testRainy() {
    const weather = report(sensorStub);
    console.log(weather);
    expect(weather).includes("rain", "Test failed: Expected 'rain' in weather description");
}

function testHighPrecipitation() {
    const weather = report(highPrecipitationStub);
    expect(weather).equals("Alert, Stormy with heavy rain", "Test failed: Expected 'Alert, Stormy with heavy rain'");
}

testRainy();
testHighPrecipitation();
console.log("All is well (maybe!)");
