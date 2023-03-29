let result = document.getElementById('result');

function addInput(val) {
    result.value += val;
}

function clearResult() {
    result.value = '';
}

function getResult() {
    let input = result.value;
    result.value = eval(input);
}
