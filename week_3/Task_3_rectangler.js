// Function to calculate the perimeter of a rectangle
function calcPerimeter(length, width) {
    const perimeter = 2 * (length + width);
    return `The perimeter is ${perimeter}`;
}

// Function to calculate the area of a rectangle
function calcArea(length, width) {
    const area = length * width;
    return `The area is ${area}`;
}

document.getElementById('rectangleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const length = document.getElementById('length').value;
    const width = document.getElementById('width').value;

    const perimeterResult = calcPerimeter(length, width);
    const areaResult = calcArea(length, width);

    document.getElementById('perimeterOutput').textContent = perimeterResult;
    document.getElementById('areaOutput').textContent = areaResult;
});
