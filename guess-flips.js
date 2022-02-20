// Import the coinFlips function from your coin.mjs file
import {flipACoin} from "./modules/coin.mjs";
import minimist from "minimist";

// Call the coinFlips function and put the return into STDOUT
const myArgs = minimist(process.argv.slice(2));
console.log(flipACoin(myArgs['call']));