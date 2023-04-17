const income = [];
const expenses = [];
const incomeTable = document.querySelector('#income-table tbody');
const expenseTable = document.querySelector('#expense-table tbody');
const balanceAmount = document.querySelector('#balance-amount');
const incomeForm = document.getElementById('income-form');
const incomeDescription = incomeForm.elements['income-description'];
const incomeAmount = incomeForm.elements['income-amount'];
const expenseForm = document.getElementById('expense-form');
const expenseDescription = expenseForm.elements['expense-description'];
const expenseAmount = expenseForm.elements['expense-amount'];

function addIncome() {
    const description = incomeDescription.value.trim();
    const amount = parseFloat(incomeAmount.value.trim());
    if (description && amount) {
        income.push({ description, amount });
        displayData();
        incomeForm.reset();
        saveData();
    }
}

function addExpense() {
    const description = expenseDescription.value.trim();
    const amount = parseFloat(expenseAmount.value.trim());
    if (description && amount) {
        expenses.push({ description, amount });
        displayData();
        expenseForm.reset();
        saveData();
    }
}

function displayData() {
    clearTable(incomeTable);
    clearTable(expenseTable);
    income.map(item => addItemToTable(item, incomeTable));
    expenses.map(item => addItemToTable(item, expenseTable));
    calculateBalance();
}

function addItemToTable({ description, amount }, table) {
    const row = table.insertRow();
    const descriptionCell = row.insertCell();
    const amountCell = row.insertCell();
    descriptionCell.textContent = description;
    amountCell.textContent = `$${amount.toFixed(2)}`;
}

function clearTable(table) {
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
}

function calculateBalance() {
    const incomeTotal = income.reduce((total, { amount }) => total + amount, 0);
    const expenseTotal = expenses.reduce((total, { amount }) => total + amount, 0);
    const balance = incomeTotal - expenseTotal;
    balanceAmount.textContent = `$${balance.toFixed(2)}`;
}

function saveData() {
    localStorage.setItem('income', JSON.stringify(income));
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

function loadData() {
    income.push(...JSON.parse(localStorage.getItem('income')) || []);
    expenses.push(...JSON.parse(localStorage.getItem('expenses')) || []);
    displayData();
}

incomeForm.addEventListener('submit', event => {
    event.preventDefault();
    addIncome();
});

expenseForm.addEventListener('submit', event => {
    event.preventDefault();
    addExpense();
});

window.addEventListener('load', loadData);
