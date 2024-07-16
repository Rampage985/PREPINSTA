function calculatePetAge(petAge, conversionRate = 7) {
    const petYears = petAge * conversionRate;
    return `Your pet is ${petYears} years old in pet years!`;
}

document.getElementById('petAgeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const petAge = document.getElementById('petAge').value;
    const conversionRate = document.getElementById('conversionRate').value;

    const result = calculatePetAge(petAge, conversionRate);
    document.getElementById('petAgeOutput').textContent = result;
});
