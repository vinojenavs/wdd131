
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');



button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;
        list.appendChild(li);
        const deleteButton = document.createElement('button');
        li.append(deleteButton);
        deleteButton.textContent = "❌";
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
            input.value = '';
            input.focus();
        })
    }
})

