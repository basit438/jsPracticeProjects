// // let body = document.querySelector('body');

// // async function getData() {
// //   for (let i = 1; i < 10; i++) {
// //     let pokeData = await fetch(`https://pokeapi.co/api/v2/type/${i}`);
// //     let pokeDataObj = await pokeData.json();
// //     createCard(pokeDataObj);
// //     // console.log(pokeDataObj);
// //   }
// // }

// // //function to create a div

// // function createCard(data){
// //     let card = document.createElement('div');
// //     card.classList.add('card');

// // }

// // // Attach the load event to the window object
// // window.addEventListener('load', (e) => {
// //   getData();
// // });

// let cardsContainer = document.querySelector(".cards-container");

// let searchInput = document.querySelector('#searchInput');




// let maxPokemon = 201;
// async function getPokemon(i) {
//   let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
//   let result = await data.json();
//   return result
// }
// async function createPokemonCard(details){

//     let card = document.createElement('div');

//     card.innerHTML =`
//     <div class ="card-parent">
//     <div class="card-front">
//     <div class="id">${details.id}</div>
//     <img src="${details.sprites.front_default}"/>
//     <div class="name">${details.name}</div>
//     <div class="type">${details.types[0].type.name}</div>
//     </div>


//     <div class= "card-back">
//     <img src="${details.sprites.back_default}"/>
//      <div class="name">${details.name}</div>

//      <div class ="ability">${details.abilities[0].ability.name}</div>
//     </div>
//     </div>
//     `
//     return card
// }
// async function getMaindata() {
//   for (let i = 1; i < maxPokemon; i++) {
//     let pokemon = await getPokemon(i);
//     let pokemonCard = await createPokemonCard(pokemon);
//     cardsContainer.appendChild(pokemonCard);
//   }
// }



// getMaindata();





// searchInput.addEventListener("input", function() {
//     let searchValue = searchInput.value.toLowerCase();

//     let cards = document.querySelectorAll('.card-parent');

//     cards.forEach((card) => {
//         let pokemonName = card.querySelector('.name').textContent.toLowerCase();
//         if (pokemonName.startsWith(searchValue)) {
//             card.style.display = "block";
//         } else {
//             card.style.display = "none";
//         }
//     });
// });



// // another method to acces the name 

// // searchInput.addEventListener("input" ,function(){
// // let searchValue = searchInput.value.toLowerCase();

// // let cards = document.querySelectorAll('.card-parent');

// // cards.forEach((card)=>{
// //     let pokemonName = card.children[0].children[2].textContent.toLowerCase();
// // if(pokemonName.startsWith(searchValue)){
// //     card.style.display ="block"
// // } else{
// //     card.style.display ="none"
// // }
// // })
// // })


// filterButton.addEventListener('click', function() {
//     let cards = document.querySelectorAll('.card-parent');
  
//     cards.forEach((card) => {
//       let pokemonType = card.querySelector('.type').textContent.toLowerCase();
//       if (pokemonType === type.value.toLowerCase()) {
//         card.style.display = "block";
//       } else {
//         card.style.display = "none";
//       }
//     });
// });


let cardsContainer = document.querySelector(".cards-container");

let searchInput = document.querySelector('#searchInput');
let filterButton = document.querySelector('#filterType');
let type = document.querySelector('#type');

let maxPokemon = 500;

async function getPokemon(i) {
  let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
  let result = await data.json();
  return result;
}

async function createPokemonCard(details) {
  let card = document.createElement('div');

  card.innerHTML = `
    <div class="card-parent">
      <div class="card-front">
        <div class="id">${details.id}</div>
        <img src="${details.sprites.front_default}" />
        <div class="name">${details.name}</div>
        <div class="type">${details.types[0].type.name}</div>
      </div>
      <div class="card-back">
        <img src="${details.sprites.back_default}" />
        <div class="name">${details.name}</div>
        <div class="ability">${details.abilities[0].ability.name}</div>
      </div>
    </div>
  `;
  return card;
}

async function getMaindata() {
  for (let i = 1; i <= maxPokemon; i++) {  // Change to i <= maxPokemon to include 500th Pokémon
    let pokemon = await getPokemon(i);
    let pokemonCard = await createPokemonCard(pokemon);
    cardsContainer.appendChild(pokemonCard);
  }
}

getMaindata();

searchInput.addEventListener("input", function() {
  let searchValue = searchInput.value.toLowerCase();

  let cards = document.querySelectorAll('.card-parent');

  cards.forEach((card) => {
    let pokemonName = card.children[0].children[2].textContent.toLowerCase();
    if (pokemonName.startsWith(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

filterButton.addEventListener('click', function() {
  let cards = document.querySelectorAll('.card-parent');

  cards.forEach((card) => {
    let pokemonType = card.querySelector('.type').textContent.toLowerCase();
    if (pokemonType === type.value.toLowerCase()) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
