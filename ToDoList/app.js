const form = document.querySelector('form');
const input = document.querySelector('#new-item');
const list = document.querySelector('#list');
const items = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newItem = input.value.trim();
    if (newItem !== '') {
        items.push({ text: newItem, completed: false });
        renderList();
        input.value = '';
    }
});

