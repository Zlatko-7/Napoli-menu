import { data } from '/data.js'

const pizza = document.getElementById('pizza')
const burger = document.getElementById('burger')
const salads = document.getElementById('salads')
const breakfast = document.getElementById('breakfast')
const drinks = document.getElementById('drinks')
const alcohol = document.getElementById('alcohol')
const pizzaNav = document.getElementById('pizza-nav')
const burgerNav = document.getElementById('burger-nav')
const content = document.getElementById('content')


const hideAll = () => {
    burger.style.display = 'none'
    pizza.style.display = 'none'
    salads.style.display = 'none'
    breakfast.style.display = 'none'
    drinks.style.display = 'none'
    alcohol.style.display = 'none'
}

content ? hideAll() : render()

const renderItems = (items, container, type, img ) => {
    console.log(items)
    console.log(container)
    console.log(type)
    return items.map((item, index) => {
        const ingredientsSpace = item.ingredients.join(', ')
        return `<div class='container ${type}'>
                    <img class='food-img' src='${item.image}'/>
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