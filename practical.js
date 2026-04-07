// Function to calculate sum of even numbers from 1 to n
function calculateSum() {
    const inputElement = document.getElementById("numberInput");
    let resultElement = document.getElementById("resultDisplay");

    // Get the value and convert to integer
    const n = parseInt(inputElement.value, 10);

    

    let sum = 0;

    // Loop through numbers from 1 to n and sum even numbers
    for (let i = 2; i <= n; i += 2) {
        sum += i;
    }

    // Display result
    resultElement.innerText = `Sum of even numbers from 1 to ${n} is: ${sum}`;
    resultElement.style.color = "green";
}
