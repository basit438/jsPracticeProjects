let pass =  document.querySelector('#Password');

let passGen = document.querySelector('#generator-btn');

let UPPERCASE = "ABCDEFGHIJKLMNIOPQRSTUVWXYZ";

let lowecase = "abcdefghijklmniopqrstuvwxyz";

let symbol = "@!`()[]%#*/&^><+=,.";

let num = "1234567890";

let allChar = UPPERCASE+ lowecase+ symbol+ num;

let generatedPasslength = 12;




function generatePass(){
    let generatedPass ='';
    for(let i=0; i<generatedPasslength; i++){
        
        generatedPass+= allChar[Math.floor((Math.random())*allChar.length)];
    }
    return generatedPass;
}

passGen.addEventListener('click', function(){
    let newPass = generatePass();
    pass.value = newPass;

    
})

