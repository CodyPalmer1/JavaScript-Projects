let income = [];
let expenses = [];

function addIncome(description, amount) {
    income.push({ description, amount });
}

function addExpense(description, amount) {
    expenses.push({ description, amount });
}

function displayData() {
    // Display income and expenses in a table or list
}

function calculateBalance() {
    let incomeTotal = income.reduce((total, item) => total + item.amount, 0);
    let expenseTotal = expenses.reduce((total, item) => total + item.amount, 0);
    let balance = incomeTotal - expenseTotal;
    // Display the balance in the UI
}

function saveData() {
    localStorage.setItem('income', JSON.stringify(income));
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

function loadData() {
    income = JSON.parse(localStorage.getItem('income')) || [];
    expenses = JSON.parse(localStorage.getItem('expenses')) || [];
}
