let count = document.querySelector('#count');

let minus_btn = document.querySelector('#minus');

let reset_btn = document.querySelector('#reset');

let plus_btn = document.querySelector('#plus');

let message =document.querySelector('#message');

let startCount =0;
plus_btn.addEventListener('click', ()=>{
    message.innerHTML='';
    startCount++;
    count.innerHTML =startCount;
})

minus_btn.addEventListener('click', ()=>{
    message.innerHTML='';
    if(startCount>0){
        startCount--;
        count.innerHTML =startCount;
    } else{
        message.innerHTML =`Count Already on 0`
    }
})
reset_btn.addEventListener('click', ()=>{
    message.innerHTML='';
    if(startCount!=0){
        startCount =0;
        count.innerHTML =startCount;
    } else{
        message.innerHTML =`Count Already on 0`
    }
})