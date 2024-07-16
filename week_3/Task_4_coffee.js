function calculateCoffeeSupply(age, cupsPerDay) {
    const maxAge = 80;
    const yearsRemaining = maxAge - age;
    const totalCups = Math.round(cupsPerDay * 365 * yearsRemaining);
    return `You will need ${totalCups} cups of coffee to keep you awake until the age of ${maxAge}.`;
}

document.getElementById('coffeeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = document.getElementById('age').value;
    const cupsPerDay = document.getElementById('cupsPerDay').value;

    const result = calculateCoffeeSupply(age, cupsPerDay);
    document.getElementById('coffeeOutput').textContent = result;
});
