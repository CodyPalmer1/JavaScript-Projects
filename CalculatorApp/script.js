const result = document.getElementById('result');

function addInput(val) {
    result.value += val;
}

function clearResult() {
    result.value = '';
}

function getResult() {
    try {
        let input = result.value;
        let output = eval(input);
        if (!Number.isFinite(output)) {
            throw new Error('Invalid input');
        }
        result.value = output;
    } catch (error) {
        result.value = 'Error';
        console.error(error);
    }
}
