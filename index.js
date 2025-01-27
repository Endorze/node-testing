console.log("Hello world")

global.luckyNum = "23";

console.log(global.luckyNum);

console.log(process.platform);

const hatelovepassion = () => {
    console.log("I am exiting")
}

hatelovepassion();

//Denna kod kommer att köras när vi exitar/exekverat klart koden.
process.on("exit", function () {
    console.log("Hi, you've exited.")
})

const { EventEmitter } = require("events");
const eventEmitter = new EventEmitter;

eventEmitter.on("lunch", () => {
    console.log("I love refrigerators.")
})

eventEmitter.emit("lunch");