import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"

export const renderCatalog = (foodArray) => {
    const catalogHTML = foodArray.map(food => {
        return `<section class="plant">${food.type}</section>`
    }).join("")

    const foodHTML = document.querySelector(".container")
    foodHTML.innerHTML += catalogHTML
}


// testing functions for main.js
// const plantsInField = usePlants()
// const harvestedFood = harvestPlants(plantsInField)
// renderCatalog(harvestedFood)