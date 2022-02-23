let todoListElement = document.getElementById('todoList')

const createEvents = (el) => {
    {
        el.addEventListener('mouseenter', (e) => {
            e.target.classList.add('active')

        })
        el.addEventListener('mouseLeave', (e) => {
            e.target.classList.remove('active')
        })
    }

    el.addEventListener('click', () => {
        el.classList.remove('active')
        el.classList.add('disabled')
        if (el.style.textDecoration === 'line-through') {
            el.style.textDecoration = 'none'
        } else {
            el.style.textDecoration = 'line-through'
        }
    } )
}

    let input = document.querySelector('todoInputField');
    let form = document.querySelector('todoForm');
    

    form.addEventListener('submit', (e) => {

        e.preventDefault();

        let li = document.createElement('li')
        let stuff = document.createElement('li')

        li.classList.add('list-group-item')

        li.innerText = input.value

        createEvents(li);

        todoListElement.appendChild(li);

        input.value = '';
        createEvent.preventDefault();
        let text = document.getElementById("todoInputField");
    } )

let button = document.getElementById('button-delete');
button.addEventListener('click', () => {
    todoListElement.innerHTML = '';

})
