const button = document.querySelectorAll('button');
const body = document.querySelector('body');

button.forEach(function(b){

    b.addEventListener('click', function(e){
        if(e.target.id === 'red'){
            body.style.backgroundColor = 'red';
        }

        else if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue';
        }
        else if(e.target.id === 'green'){
            body.style.backgroundColor = 'green';
        }
        else if(e.target.id === 'orange'){
            body.style.backgroundColor = 'orange';
        }
        else if(e.target.id === 'black'){
            body.style.backgroundColor = 'black';
        }

    },  false)
})