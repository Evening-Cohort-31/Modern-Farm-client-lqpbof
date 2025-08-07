// This module will import and store the seed object from "tractor.js"

import { createAsparagus } from "./seeds/asparagus.js"

// Create an empty array named: "fieldArray" (this array should not be exported)

const fieldArray = []

/* Create and export a function called "addPlant" that accepts a seed objects as input and stores 
the seed inside 'fieldArray' */

export const addPlant = (seedObject) => {
    // Corn with return an array of objects- which will need to be iterated so the objects can be add individually.

    

    fieldArray.push(seedObject)
}

// Create and export a function called "usePlants" that returns a copy of fieldArray. 

export const usePlants = () => fieldArray.map()


// This module will export data from the plants array to the 'harvester.js' module. 

