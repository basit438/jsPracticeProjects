let cardsContainer = document.querySelector(".cards-container");

let searchInput = document.querySelector('#searchInput');
let filterButton = document.querySelector('#filterType');
let type = document.querySelector('#type');

let maxPokemon = 500;

async function getPokemon(i) {
  try {
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let result = await data.json();
    console.log(`Fetched data for Pokémon ${i}`, result); // Debugging line
    return result;
  } catch (error) {
    console.error(`Error fetching data for Pokémon ${i}`, error); // Debugging line
  }
}

async function createPokemonCard(details) {
  let card = document.createElement('div');
  
  // Get the type name and add it as a class
  let typeName = details.types[0].type.name;

  card.innerHTML = `
    <div class="card-parent">
      <div class="card-front">
        <div class="id">${details.id}</div>
        <img src="${details.sprites.front_default}" />
        <div class="name">${details.name}</div>
        <div class="type ${typeName}">${typeName}</div>
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
  for (let i = 1; i <= maxPokemon; i++) {
    let pokemon = await getPokemon(i);
    if (pokemon) {
      let pokemonCard = await createPokemonCard(pokemon);
      cardsContainer.appendChild(pokemonCard);
    }
  }
}

getMaindata();

searchInput.addEventListener("input", function() {
  let searchValue = searchInput.value.toLowerCase();
  console.log(`Searching for: ${searchValue}`); // Debugging line

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
  console.log(`Filtering for type: ${type.value}`); // Debugging line

  cards.forEach((card) => {
    let pokemonType = card.querySelector('.type').textContent.toLowerCase();
    if (pokemonType === type.value.toLowerCase()) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
