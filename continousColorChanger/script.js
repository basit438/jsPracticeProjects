let body = document.querySelector('body');

let start_btn = document.querySelector('#Start');

let stop_btn = document.querySelector('#Stop');

let hexcode ="0123456789abcdef";

let intervalid;

let colorchange =function(){
    let color ="#"
    for(let i=0;i<6;i++){
        color= color+ hexcode[Math.floor(Math.random()*16)]
    }
    body.style.backgroundColor = color;
}

start_btn.addEventListener('click', function(e) {
    // Clear any existing interval before starting a new one
    if (intervalid) {
        clearInterval(intervalid);
    }
    intervalid = setInterval(colorchange, 1000);
});

stop_btn.addEventListener('click',(e)=>{
clearInterval(intervalid);
})