// This module will import and store the seed object from "tractor.js"

import { createAsparagus } from "./seeds/asparagus.js";
import { createSoybean } from "./seeds/soybean.js";

// Create an empty array named: "fieldArray" (this array should not be exported)

const fieldArray = [];

/* Create and export a function called "addPlant" that accepts a seed objects as input and stores 
the seed inside 'fieldArray' */

export const addPlant = (seedObject) => {
  
  // Corn will return an array of objects- which will need to be iterated so the objects can be add individually.

  // Include an if statement or function to detect whether the argument is an array and iterate/map then push.

  // If the argument is not a array then it will just be pushed into the fieldArray

  if (seedObject.isArray === true) {
    for (const seed of seedObject) {
      fieldArray.push(seed);
    }
  } else {
    fieldArray.push(seedObject);
  }
  return fieldArray; 
};

// Create and export a function called "usePlants" that returns a copy of fieldArray.

export const usePlants = () => {
  const exportField = structuredClone(fieldArray)
  return exportField;
};
// This module will export data from the plants array to the 'harvester.js' module.


