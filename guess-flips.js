// Import the coinFlips function from your coin.mjs file
import {flipACoin} from "./modules/coin.mjs";
import minimist from "minimist";

// Call the coinFlips function and put the return into STDOUT
const myArgs = minimist(process.argv.slice(2));
const call = myArgs['call']

if(call == "heads" || call == "tails") {
    console.log(flipACoin(call))
} else {
    console.log("Error: no input\nUsage: node guess-flip --call=[heads|tails]")
}