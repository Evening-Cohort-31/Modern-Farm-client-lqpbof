// Dummy code to test function before adding other modules //

// const fieldArray = [
//     {
//     type: "Soybean",
//     height: 20,
//     output: 4
//     },
//     {
//     type: "Corn",
//     height: 20,
//     output: 6
//     },
//     {
//     type: "Potato",
//     height: 32,
//     output: 2
//     }
// ]

// Dummy field Array Code to test function before adding other modules//


//Define and export a harvestPlants() function 

export const harvestPlants = (fieldArray) => {  //harvestPlants() must accept the plants array as input.
    let harvestedFoodArray = [] 

    for (const seedObject of fieldArray){

    if (seedObject.type === "Corn"){    //only return half the number of plant objects for corn 
        for (let i=0; i < seedObject.output; i+= 2){ 
        harvestedFoodArray.push(seedObject)    
        }
    }  

    else {        // take the output from each plant object and add that many objects to the new array
        for (let i=0; i < seedObject.output; i++){ 
        harvestedFoodArray.push(seedObject)    
        }
    } 
}
return harvestedFoodArray  //  return the output in a new array.


}

// Dummy Code to call the function and store it in a new variable and test with console log

// const harvestedPlants = harvestPlants(fieldArray)
// console.log(harvestedPlants)

//add to main module when code/function names from other modules is available
