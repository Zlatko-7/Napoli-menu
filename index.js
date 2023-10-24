import { data } from '/data.js'

let pizza = document.getElementById('pizza')
let burger = document.getElementById('burger')
const pizzaNav = document.getElementById('pizza-nav')
const burgerNav = document.getElementById('burger-nav')
const content = document.getElementById('content')
const food = document.getElementById('food')
const drinks = document.getElementById('drink')
const btnContainer = document.getElementById('btn-container')


if(content) { 
    burger.style.display = 'none'
    pizza.style.display = 'none'
} else {
    render()
}

const renderItems = (items, container, type ) => {
    console.log(items, container, type)
    return items.map((item, index) => {
        const ingredientsSpace = item.ingredients.join(', ')
        return `<div class='container ${type}'>
                    <p class='name'>${item.name}</p>
                    <p class='price'>${item.price}</p>
                    <p class='ingredients'>${ingredientsSpace}</p>
                </div>
                `

    }).join('')
}

const renderPizza = () => {
    const pizzaData = data[0].pizzas
    const pizzaHtml = renderItems(pizzaData, pizza, 'pizza')
    pizza.innerHTML = pizzaHtml
}

const renderBurger = () => {
    const burgerData = data[0].hamburgers
    const burgerHtml = renderItems(burgerData, burger, 'burger')
    burger.innerHTML = burgerHtml
}


const render = () => {
    renderPizza()
    renderBurger()
}

pizzaNav.addEventListener('click', () => {
    pizza.style.display = 'block'
    burger.style.display = 'none'
    content.style.display = 'none'
})

burgerNav.addEventListener('click', () => {
    burger.style.display = 'block'
    pizza.style.display = 'none'
    content.style.display = 'none'
})

render()