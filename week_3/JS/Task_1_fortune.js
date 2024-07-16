function tellFortune(numChildren, partnerName, location, jobTitle) {
    const fortune = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
    return fortune;
}

document.getElementById('fortuneForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numChildren = document.getElementById('numChildren').value;
    const partnerName = document.getElementById('partnerName').value;
    const location = document.getElementById('location').value;
    const jobTitle = document.getElementById('jobTitle').value;

    const fortune = tellFortune(numChildren, partnerName, location, jobTitle);
    document.getElementById('fortuneOutput').textContent = fortune;
});
