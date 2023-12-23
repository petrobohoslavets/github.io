document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll('.cls')
    const button = document.getElementById('task')
    const sumInput = document.getElementById('sum')

    function sumNumbers() {
        let sum = 0;
        inputs.forEach(element => {
            sum += (element.value !== "" ? parseFloat(element.value) : 0)
        });

        sumInput.value = sum;
    }

    button.addEventListener('click', sumNumbers)
})