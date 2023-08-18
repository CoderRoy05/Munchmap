const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const resultsList = document.querySelector('#results');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchRecipe();
})

async function searchRecipe() {
    const searchValue = searchInput.value.trim();
    const response = await fetch(`https://api.edamam.com/search?q=${searchValue}&app_id=7aa516a5&app_key=dc836a223fb788b11ae390504d9e97ce&from=0&to=10`);
    const data = await response.json();
    displayRecipes(data.hits);
}

function displayRecipes(recipes) {
    let html = '';
    recipes.forEach((recipe) => {
        html += `
        <div>
            <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
            <h3>${recipe.recipe.label}</h3>
            <ul>
                ${recipe.recipe.ingredientLines.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <a href="${recipe.recipe.url}" target="_blank">View Recipe</a>
        </div> 
        `
    })
    resultsList.innerHTML = html;
}
// // // Get references to the HTML elements
// // const searchForm = document.getElementById('search-form');
// // const searchInput = document.getElementById('search-input');
// // const cuisineTypeSelect = document.getElementById('cuisine-type');
// // const mealTypeSelect = document.getElementById('meal-type'); // Add this reference
// // const resultsContainer = document.getElementById('results');

// MADE SOME ADJUSTMENT- i needed something more User friendly (i.Terms0fInfo)

// // // Edamam API credentials
// // const apiKey = 'a14a16774decb4de113ef68152fc7a13';
// // const appId = 'eda8ec37';

// // // Event listener for form submission
// // searchForm.addEventListener('submit', async event => {
// //   event.preventDefault();

// //   const userSearchQuery = searchInput.value.trim();
// //   const selectedCuisineType = cuisineTypeSelect.value;
// //   const selectedMealType = mealTypeSelect.value; // Get the selected meal type

// //   if (userSearchQuery) {
// //     try {
// //       const imageSize = 'REGULAR';
// //       const apiUrl = `https://api.edamam.com/api/recipes/v2?q=${userSearchQuery}&imageSize=${imageSize}&cuisineType=${selectedCuisineType}&mealType=${selectedMealType}&app_id=${appId}&app_key=${apiKey}`;
// //       const response = await fetch(apiUrl);
// //       const data = await response.json();
      
// //       // Display search results in the results container
// //       displayResults(data);
// //     } catch (error) {
// //       console.error('Error fetching data:', error);
// //     }
// //   }
// // });

// // // Function to display search results
// // function displayResults(data) {
// //   resultsContainer.innerHTML = '';

// //   if (data && data.hits && data.hits.length > 0) {
// //     data.hits.forEach(hit => {
// //       const recipe = hit.recipe;
// //       const recipeName = recipe.label;
// //       const recipeUrl = recipe.url;

// //       const resultItem = document.createElement('div');
// //       resultItem.innerHTML = `<a href="${recipeUrl}" target="_blank">${recipeName}</a>`;
// //       resultsContainer.appendChild(resultItem);
// //     });
// //   } else {
// //     resultsContainer.innerHTML = 'No results found.';
// //   }
// // }

// // Get references to the HTML elements
// const searchForm = document.getElementById('search-form');
// const searchInput = document.getElementById('search-input');
// const resultsContainer = document.getElementById('results');

// // Edamam API credentials
// const apiKey = 'a14a16774decb4de113ef68152fc7a13';
// const appId = 'eda8ec37';

// // Event listener for form submission
// searchForm.addEventListener('submit', async event => {
//   event.preventDefault();

//   const userSearchQuery = searchInput.value.trim();

//   if (userSearchQuery) {
//     try {
//       const apiUrl = `https://api.edamam.com/api/recipes/v2?q=${userSearchQuery}&app_id=${appId}&app_key=${apiKey}`;
//       const response = await fetch(apiUrl);
//       const data = await response.json();
      
//       // Display search results in the results container
//       displayResults(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }
// });

// // Function to display search results
// function displayResults(data) {
//   resultsContainer.innerHTML = '';

//   if (data && data.hits && data.hits.length > 0) {
//     data.hits.forEach(hit => {
//       const recipe = hit.recipe;
//       const recipeName = recipe.label;
//       const recipeUrl = recipe.url;

//       const resultItem = document.createElement('div');
//       resultItem.innerHTML = `<a href="${recipeUrl}" target="_blank">${recipeName}</a>`;
//       resultsContainer.appendChild(resultItem);
//     });
//   } else {
//     resultsContainer.innerHTML = 'No results found.';
//   }
// }

// THIRD part

// document.addEventListener('DOMContentLoaded', () => {
//     // Get references to the HTML elements
//     const searchForm = document.getElementById('search-form');
//     const searchInput = document.getElementById('search-input');
//     const resultsContainer = document.getElementById('results');
  
//     // Edamam API credentials
//     const apiKey = 'a14a16774decb4de113ef68152fc7a13';
//     const appId = 'eda8ec37';
  
//     // Event listener for form submission
//     searchForm.addEventListener('submit', async event => {
//       event.preventDefault();
  
//       const userSearchQuery = searchInput.value.trim();
  
//       if (userSearchQuery) {
//         try {
//           const imageSize = 'REGULAR';
//           const apiUrl = `https://api.edamam.com/api/recipes/v2?q=${userSearchQuery}&imageSize=${imageSize}&app_id=${appId}&app_key=${apiKey}`;
//           const response = await fetch(apiUrl);
//           const data = await response.json();
  
//           // Display search results in the results container
//           displayResults(data);
//         } catch (error) {
//           console.error('Error fetching data:', error);
//         }
//       }
//     });
  
//     // Function to display search results
//     function displayResults(data) {
//       resultsContainer.innerHTML = '';
  
//       if (data && data.hits && data.hits.length > 0) {
//         data.hits.forEach(hit => {
//           const recipe = hit.recipe;
//           const recipeName = recipe.label;
//           const recipeUrl = recipe.url;
  
//           const resultItem = document.createElement('div');
//           resultItem.innerHTML = `<a href="${recipeUrl}" target="_blank">${recipeName}</a>`;
//           resultsContainer.appendChild(resultItem);
//         });
//       } else {
//         resultsContainer.innerHTML = 'No results found.';
//       }
//     }
//   });


