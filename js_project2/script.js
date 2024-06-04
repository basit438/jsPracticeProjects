const form = document.querySelector('form');
let result = document.querySelector('#result');

form.addEventListener('submit', function(e){
        const height = parseInt(document.querySelector('#height').value);
        const weight = parseInt(document.querySelector('#weight').value);

        if(height == '' || height<0 || isNaN(height)){
            result.innerHTML = `Please Enter valid Height`;
        }
        else if(weight == '' || weight<0 || isNaN(weight)){
            result.innerHTML = `Please Enter valid Weight`;
        }
        else{
            let BMI =  (weight / (( height * height) / 10000)).toFixed(2);

            result.innerHTML = `Your BMI is : ${BMI}`
        }
},  false)