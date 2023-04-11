let income = [];
let expenses = [];
const incomeTable = document.getElementById('income-table').getElementsByTagName('tbody')[0];
const expenseTable = document.getElementById('expense-table').getElementsByTagName('tbody')[0];
const balanceAmount = document.getElementById('balance-amount');

function addIncome(description, amount) {
    income.push({ description, amount });
    displayData();
}

function addExpense(description, amount) {
    expenses.push({ description, amount });
    displayData();
}

function displayData() {
    clearTable(incomeTable);
    clearTable(expenseTable);
    income.forEach(item => {
        addItemToTable(item, incomeTable);
    });
    expenses.forEach(item => {
        addItemToTable(item, expenseTable);
    });
    calculateBalance();
}

function addItemToTable(item, table) {
    const row = table.insertRow();
    const descriptionCell = row.insertCell();
    const amountCell = row.insertCell();
    descriptionCell.textContent = item.description;
    amountCell.textContent = `$${item.amount.toFixed(2)}`;
}

function clearTable(table) {
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
}

function calculateBalance() {
    const incomeTotal = income.reduce((total, item) => total + item.amount, 0);
    const expenseTotal = expenses.reduce((total, item) => total + item.amount, 0);
    const balance = incomeTotal - expenseTotal;
    balanceAmount.textContent = `$${balance.toFixed(2)}`;
}

function saveData() {
    localStorage.setItem('income', JSON.stringify(income));
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

function loadData() {
    income = JSON.parse(localStorage.getItem('income')) || [];
    expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    displayData();
}

document.getElementById('income-form').addEventListener('submit', event => {
    event.preventDefault();
    const description = event.target.elements['income-description'].value.trim();
    const amount = parseFloat(event.target.elements['income-amount'].value.trim());
    if (description && amount) {
        addIncome(description, amount);
        event.target.reset();
        saveData();
    }
});

document.getElementById('expense-form').addEventListener('submit', event => {
    event.preventDefault();
    const description = event.target.elements['expense-description'].value.trim();
    const amount = parseFloat(event.target.elements['expense-amount'].value.trim());
    if (description && amount) {
        addExpense(description, amount);
        event.target.reset();
        saveData();
    }
});

window.addEventListener('load', loadData);
