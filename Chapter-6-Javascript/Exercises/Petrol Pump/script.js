window.onload = () => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        input.addEventListener('change', calculate); // Trigger calculation on input change
    });
}
function calculate() {
    // Get values from input fields
    const petrolPrice = document.querySelector('#Petrol_Price').value;
    const liters = document.querySelector('#liters').value;

    // If either input is empty, stop the calculation
    if (!petrolPrice || !liters) return;

    const totalCost = petrolPrice * liters;

    document.querySelector('#totalAmount').innerText = `Total Cost: ${totalCost.toFixed(2)} AED`;
}