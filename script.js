document.getElementById('code').addEventListener('input', validateCode);

async function validateCode() {
    const code = document.getElementById('code').value.trim();
    const result = document.getElementById('result');

    try {
        const response = await fetch('validCodes.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const validCodes = data.validCodes;

        const codeData = validCodes.find(item => item.code === code);

        if (codeData) {
            result.textContent = `Certificate is valid!\nRecipient: ${codeData.name}`;
            result.style.color = 'green';
        } else {
            result.textContent = 'Certificate is invalid!';
            result.style.color = 'red';
        }
    } catch (error) {
        result.textContent = 'Error: Unable to validate code.';
        result.style.color = 'red';
    }
}
