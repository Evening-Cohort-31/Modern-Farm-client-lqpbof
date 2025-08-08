import { createCorn } from "./seeds/corn.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createPotato } from "./seeds/potato.js";
import { createWheat } from "./seeds/wheat.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createSoybean } from "./seeds/soybean.js";
import { addPlant } from "./field.js";

export const plantSeeds = (yearlyPlan) => {
  yearlyPlan.forEach((row, rowIndex) => {
    row.forEach((plantType, plotIndex) => {
      let seed;

      switch (plantType) {
        case "Corn":
          seed = createCorn();
          seed.forEach((cornSeed) => addPlant(cornSeed));
          break;
        case "Asparagus":
          seed = createAsparagus();
          addPlant(seed);
          break;
        case "Potato":
          seed = createPotato();
          addPlant(seed);
          break;
        case "Wheat":
          seed = createWheat();
          addPlant(seed);
          break;
        case "Sunflower":
          seed = createSunflower();
          addPlant(seed);
          break;
        case "Soybean":
          seed = createSoybean();
          addPlant(seed);
          break;
      }
    });
  });
};
