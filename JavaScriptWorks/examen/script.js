document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll('.cls')
    const button = document.getElementById('task')

    function sumNumbers() {
        let sum = 0;
        inputs.forEach(element => {
            sum += (element.value !== "" ? parseFloat(element.value) : 0)
        });

        let sumInput = document.getElementById('sum')
        if(sumInput !== undefined && sumInput !== null) document.body.removeChild(sumInput)

        sumInput = document.createElement('input')
        sumInput.setAttribute('type', 'text')
        sumInput.setAttribute('value', sum)
        sumInput.setAttribute('id', 'sum')
        sumInput.setAttribute('readonly', 'readonly')
        
        document.body.appendChild(sumInput)
    }

    button.addEventListener('click', sumNumbers)
})