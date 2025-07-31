import { createPlan } from "./plan.js";
import { createAsparagus } from "./seeds/asparagus.js";
const yearlyPlan = createPlan();
const asparagusSeed = createAsparagus();
console.log("Welcome to the main module");
console.log(asparagusSeed);
