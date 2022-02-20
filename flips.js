// Import the coinFlips function from your coin.mjs file
import {coinFlips, countFlips} from "./modules/coin.mjs";
import minimist from "minimist";

// Call the coinFlips function and put the return into STDOUT
const myArgs = minimist(process.argv.slice(2));
//console.log(myArgs['number'])

let arr = coinFlips(myArgs['number']);
console.log(arr);
console.log(countFlips(arr));