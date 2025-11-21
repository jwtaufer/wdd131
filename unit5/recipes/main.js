import recipes from "./recipes.mjs";

function randomNumber(number) {
    return Math.floor(Math.random()*number);
}

function getRandomListEntry(list) {
    return list[randomNumber(list.length)];
}

function recipeTemplate(recipe) {
    return `<section class="recipe-container">
    <img src="${recipe.image}" alt="${recipe.name} photo">
    <div class="recipe-info">
        <div class="recipe-tag-container">
            ${tagsTemplate(recipe.tags)}
        </div>
        <h2>${recipe.name}</h2>
        ${ratingTemplate(recipe.rating)}
        <p class="recipe-description hide">${recipe.description}</p>
    </div>
</section>`
}

function tagsTemplate(tags) {
    let html = ``
    tags.forEach((tag) => {
        html += `<p class="recipe-tag">${tag}</p>\n`
    });
    
    return html;
}

function ratingTemplate(rating) {
    let html = `<span
        class="recipe-rating"
        role="img"
        aria-label="Rating: ${rating} out of 5 stars"
    >\n`

    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>\n`
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>\n`
        }
    }

    html += `</span>`

    return html;
}

function renderRecipes(recipeList) {
    let html = ``;

    recipeList.forEach((recipe) => {
        html += recipeTemplate(recipe);
    });

    document.querySelector("main").innerHTML = html;
}

function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

function filterRecipies(query) {
    function searchCallback(recipe) {
        return (
            recipe.name.toLowerCase().includes(query.toLowerCase()) ||
            recipe.description.toLowerCase().includes(query.toLowerCase()) ||
            recipe.tags.find((item) => item.toLowerCase().includes(query)) ||
            recipe.recipeIngredient.find((item) => item.toLowerCase().includes(query))
        );
    }
    function compareFn(a, b) {
        if (a.name < b.name) {
            return -1;
        } else if (a.name > b.name) {
            return 1;
        }
    }
    const filtered = recipes.filter(searchCallback);
    const sorted = filtered.sort(compareFn);
    return sorted;
}

function searchHandler(e) {
    e.preventDefault()
    const searchQuery = document.querySelector("#search-box").value.toLowerCase();
    renderRecipes(filterRecipies(searchQuery));
}

init();
document.querySelector("#search-button").addEventListener("click", searchHandler);