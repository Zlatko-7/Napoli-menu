import { data } from '/data.js'

const content = document.getElementById('content')
const pizzaNav = document.getElementById('pizza-nav')
const burgerNav = document.getElementById('burger-nav')
const breakfastNav = document.getElementById('breakfast-nav')
const wrapNav = document.getElementById('wrap-nav')
const saladsNav = document.getElementById('salads-nav')
const appetizersNav = document.getElementById('appetizers-nav')
const pastaNav = document.getElementById('pasta-nav')
const meatNav = document.getElementById('meat-nav')
const dessertNav = document.getElementById('dessert-nav')
const drinksNav = document.getElementById('drinks-nav')
const alcoholNav = document.getElementById('alcohol-nav')
const topBtn = document.getElementById('top-btn')

window.onscroll = () => {scrollFunction()}

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

topBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

const hideContent = () => {
    content.style.display = 'none'
}
const foodItems = {
    pizza: document.getElementById('pizza'),
    burger: document.getElementById('burger'),
    salads: document.getElementById('salads'),
    breakfast: document.getElementById('breakfast'),
    drinks: document.getElementById('drinks'),
    alcohol: document.getElementById('alcohol'),
    wrap: document.getElementById('wrap'),
    dessert: document.getElementById('dessert'),
    appetizers: document.getElementById('appetizers'),
    pasta: document.getElementById('pasta'),
     meat: document.getElementById('meat'),
}

const hideAll = () => {
    for (let itemName in foodItems) {
        foodItems[itemName].style.display = 'none'
    }
}

const renderItems = (items, container, type) => {
    return items.map(item => {
        console.log(item)
        const ingredientsSpace = item.ingredients.join(', ')
        return `<div class='container ${type}'>
                    <img class='food-img' src='${item.image}' alt="food"/>
                    <p class='name'>${item.name}</p>
                    <p class='price'>${item.price}</p>
                    <p class='ingredients'>${ingredientsSpace}</p>
                </div>`
    }).join('')
}

const renderFoodItems = (data, element, type) => {
    const foodData = data[0][type]
    const foodHtml = renderItems(foodData, foodItems[element], type)
    foodItems[element].innerHTML = foodHtml
}

const showElement = (element) => {
    hideAll()
    foodItems[element].style.display = 'block'
}

pizzaNav.addEventListener('click', () => {
    showElement('pizza')
    hideContent()
})
burgerNav.addEventListener('click', () => {
    showElement('burger')
    hideContent()
})
breakfastNav.addEventListener('click', () => {
    showElement('breakfast')
    hideContent()
})
wrapNav.addEventListener('click', () => {
    showElement('wrap')
    hideContent()
})
saladsNav.addEventListener('click', () => {
    showElement('salads')
    hideContent()
})
pastaNav.addEventListener('click', () => {
    showElement('pasta')
    hideContent()
})
appetizersNav.addEventListener('click', () => {
    showElement('appetizers')
    hideContent()
})
meatNav.addEventListener('click', ()=> {
    showElement('meat')
    hideContent()
})
dessertNav.addEventListener('click', () => {
    showElement('dessert')
    hideContent()
})
drinksNav.addEventListener('click', () => {
    showElement('drinks')
    hideContent()
})
alcoholNav.addEventListener('click', () => {
    showElement('alcohol')
    hideContent()
})

const render = () => {
    renderFoodItems(data, 'pizza', 'pizzas')
    renderFoodItems(data, 'burger', 'hamburgers')
    renderFoodItems(data, 'breakfast', 'breakfast')
    renderFoodItems(data, 'wrap', 'wraps')
    renderFoodItems(data, 'salads', 'salads')
    renderFoodItems(data, 'pasta', 'pasta')
    renderFoodItems(data, 'appetizers', 'appetizers')
    renderFoodItems(data, 'meat', 'meat')
    renderFoodItems(data, 'dessert', 'dessert')
    renderFoodItems(data, 'drinks', 'drinks')
    renderFoodItems(data, 'alcohol', 'alcohol')
}


content ? hideAll() : hideContent()
render()