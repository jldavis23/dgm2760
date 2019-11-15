let message

// Pizza object
const pizza = {
    crust: 'thin',
    size: 'small',
    topping: 'pepperoni',
    buildPizza: () => {
        message = `Baking a ${pizza.size} pizza on a ${pizza.crust} crust with ${pizza.topping} just for you! <br> <i class="far fa-clock"></i> Ready in 10 minutes`
        document.querySelector('#message').innerHTML = message
    },
    shoppingList: () => {
        let flour = 1
        if (pizza.crust === 'thick') {
            flour *= 2 
        }
        if (pizza.size === 'large') {
            flour *= 2
        }
        message = `To make this pizza, you will need to purchase ${flour} cups of flour and 1 lb of ${pizza.topping}.`
        document.querySelector('#message').textContent = message
    }
}

let pepperoni = document.querySelector('#pizza-pepperoni')
let sausage = document.querySelector('#pizza-sausage')
let crust = document.querySelector('#pizza-crust')

document.querySelector('#thin').addEventListener('click', () => {
    pizza.crust = "thin"
    crust.classList = "crust-thin"
})
document.querySelector('#thick').addEventListener('click', () => {
    pizza.crust = "thick"
    crust.classList = "crust-thick"
})

document.querySelector('#small').addEventListener('click', () => pizza.size = 'small')
document.querySelector('#large').addEventListener('click', () => pizza.size = 'large')

document.querySelector('#pepperoni').addEventListener('click', () => {
    pizza.topping = 'pepperoni'
    pepperoni.classList = 'show'
    sausage.classList = 'hide'
})
document.querySelector('#sausage').addEventListener('click', () => {
    pizza.topping = 'sausage'
    pepperoni.classList = 'hide'
    sausage.classList = 'show'
})

// Buttons
document.querySelector('#build').addEventListener('click', pizza.buildPizza)
document.querySelector('#shopping').addEventListener('click', pizza.shoppingList)

