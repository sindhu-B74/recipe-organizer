document.getElementById('addRecipeBtn').addEventListener('click', addRecipe);

function addRecipe() {
    const name = document.getElementById('recipeName').value;
    const ingredients = document.getElementById('recipeIngredients').value;
    const instructions = document.getElementById('recipeInstructions').value;

    if (name && ingredients && instructions) {
        const recipe = {
            name,
            ingredients,
            instructions
        };

        displayRecipe(recipe);
        
        // Clear the form inputs
        document.getElementById('recipeName').value = '';
        document.getElementById('recipeIngredients').value = '';
        document.getElementById('recipeInstructions').value = '';
    } else {
        alert("Please fill in all fields.");
    }
}

function displayRecipe(recipe) {
    const recipeList = document.getElementById('recipeList');
    
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');
    
    recipeCard.innerHTML = `
        <h3>${recipe.name}</h3>
        <p><strong>Ingredients:</strong><br>${recipe.ingredients}</p>
        <p><strong>Instructions:</strong><br>${recipe.instructions}</p>
    `;
    
    recipeList.appendChild(recipeCard);
}
