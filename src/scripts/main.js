import { renderCatalog } from "./catalog.js";
import { usePlants } from "./field.js";
import { harvestPlants } from "./harvester.js";
import { createPlan } from "./plan.js";
import { createAsparagus } from "./seeds/asparagus.js";


const yearlyPlan = createPlan();
const asparagusSeed = createAsparagus();
// console.log("Welcome to the main module");
console.log(asparagusSeed);

const plantsInField = usePlants()
const harvestedFood = harvestPlants(plantsInField)
renderCatalog(harvestedFood)