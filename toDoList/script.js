let container = document.querySelector('#container');

let task = document.querySelector('#task');

let btn_add = document.querySelector('#btn-add');

let ul = document.querySelector('ul');

btn_add.addEventListener('click', function() {
    if(task.value === '') {
        alert('Please add a task');
    } else {
        let li = document.createElement('li');

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        li.appendChild(checkbox);

        let taskText = document.createElement('span');
        taskText.innerText = task.value;
        li.appendChild(taskText);

        let cross = document.createElement('span');
        cross.innerHTML = "X";
        li.appendChild(cross);

        ul.appendChild(li);
        task.value = '';
    }
});

container.addEventListener('click', function(e){
    if(e.target.tagName === "SPAN" && e.target.innerText === "X"){
        e.target.parentElement.remove();
    }
});
