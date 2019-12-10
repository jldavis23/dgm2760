let favorites = []

// FETCH JSON DATA
async function getRecipeData() {
    try {
        const response = await fetch('./recipes.json')
        return await response.json()
    } catch (error) {
        console.error(error)
    }
}
let recipeData = []
getRecipeData().then(data => recipeData = data.recipes)

// MAIN FUNCTIONS -----------------------------------------------------

// DELETE CHILD NODES FUNCTION
let deleteChildNodes = (parentStr) => {
    let parent = document.querySelector(parentStr)
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

// CREATE RECIPE CARDS FUNCTION
let createRecipeCards = (recipe, container) => {
    let a = document.createElement('a')
    a.href = '#view-recipe-section'
    a.id = `${recipe.name.replace(/ /g, "-")}-${container}`
    a.addEventListener('click', function() {
        showInstructions(recipe)
    })
    document.querySelector(container).appendChild(a)

    let figure = document.createElement('figure')
    a.appendChild(figure)

    let img = document.createElement('img')
    img.src = `images/${recipe.image}`
    figure.appendChild(img)
    
    let figcaption = document.createElement('figcaption')
    figure.appendChild(figcaption)

    let h1 = document.createElement('h1')
    h1.textContent = recipe.name
    figcaption.appendChild(h1)

    let h2 = document.createElement('h2')
    h2.textContent = recipe.category.toUpperCase()
    figcaption.appendChild(h2)

    let p = document.createElement('p')
    figcaption.appendChild(p)

    // Creates the rating stars
    let span1 = document.createElement('span')
    p.appendChild(span1)
    for (let n = 0; n < 5; n++) {
        let i = document.createElement('i')
        if (n < recipe.rating) {
            i.className = 'fas fa-star'
        } else {
            i.className = 'far fa-star'
        }
        span1.appendChild(i)
    }
    let i = document.createElement('i')
    i.textContent = `(${recipe.rating})`
    span1.appendChild(i)
    

    let span2 = document.createElement('span')
    span2.textContent = recipe.time
    p.appendChild(span2)   

    // makes it so when you click the close button it takes you back to where you were
    a.addEventListener('click', function(){
        document.querySelector('#close-button').href = `#${a.id}`
    })
}

// UPDATE FAVORITES BUTTON
let updateFavoriteButton = (recipe) => {
    if (favorites.indexOf(recipe) === -1) {
        return addFavoriteButton.innerHTML = '<i class="far fa-heart"></i> ADD TO FAVORITES'
    } else {
        return addFavoriteButton.innerHTML = '<i class="fas fa-heart"></i> REMOVE FROM FAVORITES'
    }
}



// MENU --------------------------------------------------------------
let menuButton = document.querySelector('#menu-button')

let menuToggle = () => {
    let mainNav = document.querySelector('#main-navigation')
    mainNav.classList.toggle('hide-menu')

    deleteChildNodes('#menu-button')
    menuButton.textContent = 'MENU '

    let i = document.createElement('i')
    if (mainNav.classList == 'hide-menu') {
        i.className = 'fas fa-chevron-down'
        menuButton.appendChild(i)
    } else {
        i.className = 'fas fa-chevron-up'
        menuButton.appendChild(i)
    }
}

menuToggle()
menuButton.addEventListener('click', menuToggle)
document.querySelectorAll('nav ul li a').forEach(menuItem => {
    menuItem.addEventListener('click', menuToggle)
})



// VIEW RECIPES button; displays recipe cards on click ----------------
document.querySelector('#view-recipes').addEventListener('click', function() {
    deleteChildNodes('#recipe-list')
    recipeData.forEach(recipe => {
        createRecipeCards(recipe, '#recipe-list')
    })
})


// SORTING RECIPE CARDS  --------------------------------------------------------------
sortLabels = document.querySelectorAll('#all-recipes-section label')
sortLabels.forEach(label => {
    label.addEventListener('click', () => {
        sortLabels.forEach(label => {
            label.classList = ""
        })
        label.classList = "checked"

        if (label.textContent === "All") {
            deleteChildNodes('#recipe-list')
            recipeData.forEach(recipe => {
                createRecipeCards(recipe, '#recipe-list')
            })
        } else {
            let newArray = recipeData.filter(recipe => recipe.category.toLowerCase() == label.textContent.toLowerCase())
            deleteChildNodes('#recipe-list')
            newArray.forEach(recipe => {
                createRecipeCards(recipe, '#recipe-list')
            })
        }
    })
})



// DISPLAYS RECIPE DETAILS --------------------------------------------------------------
let displayedRecipe
let showInstructions = (recipe) => {
    if (document.querySelector('#view-recipe-section').classList != 'show-recipe') {
        document.querySelector('#view-recipe-section').classList.toggle('show-recipe')
    } 

    document.querySelector('#recipe-img').style.backgroundImage = `url(images/${recipe.image})`

    // Deletes any existing ingredients, then adds the new ingredient list
    deleteChildNodes('#ingredient-list')
    recipe.ingredients.forEach(ingredient => {
        let li = document.createElement('li')
        li.textContent = ingredient
        document.querySelector('#ingredient-list').appendChild(li)
    })

    document.querySelector('#recipe-name').textContent = recipe.name

    // Renders the right FAVORITES button
    updateFavoriteButton(recipe)

    document.querySelector('#instructions-pgh').innerHTML = recipe.instructions

    displayedRecipe = recipe
}


// CLOSES RECIPE DETAILS
let hideInstructions = () => {
    document.querySelector('#view-recipe-section').classList.toggle('show-recipe')
    displayedRecipe = undefined
}

document.querySelector('#close-button').addEventListener('click', hideInstructions)


// ADD TO FAVORITES BUTTON --------------------------------------------------------------
let addFavoriteButton = document.querySelector('#add-to-favorites')
addFavoriteButton.addEventListener('click', function() {
    if (favorites.indexOf(displayedRecipe) === -1) {
        favorites.push(displayedRecipe) // add it to the favorites list
    } else {
        favorites.splice(favorites.indexOf(displayedRecipe), 1) // take it out of the favorites list
    }
    updateFavoriteButton(displayedRecipe)
    deleteChildNodes('#favorite-recipes-list')

    if (favorites.length === 0) {
        document.querySelector('#favorite-recipes-list').textContent = 'You have no favorite recipes yet'
    } else {
        favorites.forEach(recipe => createRecipeCards(recipe, '#favorite-recipes-list'))
    }
    
})


// USER ADDS RECIPES --------------------------------------------------------------
let newRecipeName = document.querySelector('#new-recipe-name')
let newRecipeCategory = document.querySelector('#new-recipe-category')
let newRecipeIngredients = document.querySelector('#new-recipe-ingredients')
let newRecipeInstructions = document.querySelector('#new-recipe-instructions')
let newRecipeTime = document.querySelector('#new-recipe-time')
let newRecipeImage = document.querySelector('#new-recipe-image')

class newRecipe {
    constructor(name, category, ingredients, instructions, time, image, rating) {
        this.name = name
        this.category = category
        this.ingredients = ingredients
        this.instructions = instructions
        this.time = time
        this.image = image
        this.rating = rating
        this.alert = () => {
            alert(`Your ${this.name} recipe has been successfully added!`)
        }
    }
}

let createRecipeButton = document.querySelector('#submit-recipe')

createRecipeButton.addEventListener('click', () => {
    if (newRecipeName.value === "" ) {
        alert('Please fill out all required fields')
    } else {
        let userRecipe = new newRecipe(newRecipeName.value, newRecipeCategory.value, newRecipeIngredients.value.split(','), newRecipeInstructions.value, newRecipeTime.value, newRecipeImage.value, 0)

        if (userRecipe.image === "") {
            userRecipe.image = `../images/default.jpg`
        }

        recipeData.push(userRecipe)
        
        deleteChildNodes('#recipe-list')
        recipeData.forEach(recipe => {
            createRecipeCards(recipe, '#recipe-list')
        })

        sortLabels.forEach(label => {
            label.classList = ""
        })
        document.querySelector('#all-label').classList = "checked"

        userRecipe.alert()
    } 
})