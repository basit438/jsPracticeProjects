document.addEventListener('DOMContentLoaded', () => {
    // Select the search button
    let searchBtn = document.querySelector('#search');
    
    // Select the input field where user types the recipe to find
    let recipeToFind = document.querySelector('#recipeToFind');
    
    // Select the div where the recipes will be displayed
    let recipeCard = document.querySelector('.recipes');
    
    // Select the popup container
    let recipePopup = document.querySelector('#recipePopup');
    
    // Select the div inside the popup where the recipe instructions will be displayed
    let recipeInstructionsDiv = document.querySelector('#recipeInstructions');
    
    // Select the close button of the popup
    let closeBtn = document.querySelector('.close');
    
    // Add event listener to the search button
    searchBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        try {
            // Function to fetch recipes based on query
            const fetchRecipe = async function (query) {
                let fetchedRecipes = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
                let data = await fetchedRecipes.json();

                // Clear previous results
                recipeCard.innerHTML = '';

                if (data.meals) {
                    data.meals.forEach(meal => {
                        // Create a div for each recipe
                        let recipeDiv = document.createElement('div');
                        recipeDiv.classList.add("recipediv");
                        
                        // Set the inner HTML of the recipe div
                        recipeDiv.innerHTML = `
                            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                            <h3>${meal.strMeal}</h3>
                            <h3>${meal.strArea} Dish</h3>
                            <h3>${meal.strCategory}</h3>
                        `;

                        // Create the View Recipe button
                        let viewRecipeButton = document.createElement('button');
                        viewRecipeButton.innerHTML = "View Recipe";
                        viewRecipeButton.addEventListener('click', () => {
                            let ingredientList = '';
                            // Loop through ingredients and measures and create a list
                            for (let i = 1; i <= 20; i++) {
                                let ingredient = meal[`strIngredient${i}`];
                                let measure = meal[`strMeasure${i}`];
                                if (ingredient) {
                                    ingredientList += `<li>${measure} ${ingredient}</li>`;
                                } else {
                                    break;
                                }
                            }
                            // Set the inner HTML of the popup content
                            recipeInstructionsDiv.innerHTML = `
                                <h3>${meal.strMeal} Recipe</h3>
                                <p><strong>Cooking instructions:</strong> ${meal.strInstructions}</p>
                                <p><strong>Ingredients:</strong></p>
                                <ul>${ingredientList}</ul>
                            `;
                            // Display the popup
                            recipePopup.style.display = "block";
                        });
                        recipeDiv.appendChild(viewRecipeButton);
                        recipeCard.appendChild(recipeDiv);
                    });
                } else {
                    recipeCard.innerHTML = '<p>No recipes found</p>';
                }
            }
            let searchRecipe = recipeToFind.value.trim();
            await fetchRecipe(searchRecipe);
        } catch (error) {
            console.error('Error fetching the recipes:', error);
            recipeCard.innerHTML = '<p>There was an error fetching the recipes. Please try again later.</p>';
        }
    });

    // Event listener to close the popup
    closeBtn.addEventListener('click', () => {
        recipePopup.style.display = "none";
    });

    // Event listener to close the popup if user clicks outside of it
    window.addEventListener('click', (e) => {
        if (e.target == recipePopup) {
            recipePopup.style.display = "none";
        }
    });
});
