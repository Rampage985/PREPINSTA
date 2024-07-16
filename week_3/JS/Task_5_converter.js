// Function to convert meters to feet
function metersToFeet(meters) {
    const feet = meters * 3.281;
    return `${meters} meters is equal to ${feet.toFixed(2)} feet.`;
}

// Function to convert feet to meters
function feetToMeters(feet) {
    const meters = feet * 0.3048;
    return `${feet} feet is equal to ${meters.toFixed(2)} meters.`;
}

document.getElementById('distanceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const distance = document.getElementById('distance').value;
    const conversionType = document.getElementById('conversionType').value;

    let result;
    if (conversionType === 'metersToFeet') {
        result = metersToFeet(distance);
    } else {
        result = feetToMeters(distance);
    }

    document.getElementById('conversionOutput').textContent = result;
});
