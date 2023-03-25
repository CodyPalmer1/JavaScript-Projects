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

function renderList() {
    list.innerHTML = '';
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const listItem = document.createElement('li');
        listItem.textContent = item.text;
        if (item.completed) {
            listItem.classList.add('completed');
        }
        listItem.addEventListener('click', () => {
            item.completed = !item.completed;
            renderList();
        });
        list.appendChild(listItem);
    }
}
