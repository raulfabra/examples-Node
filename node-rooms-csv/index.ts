// Node.js program to demonstrate the
// fs.readFileSync() method

import { Room } from "./types/types";

// Include fs module
const fs = require("fs");

// Calling the readFileSync() method
// to read 'input.txt' file
const data = fs.readFileSync("./json/rooms.json");
const dataJson = JSON.parse(data);

dataJson.sort((a: Room, b: Room) => a.priceNight.localeCompare(b.priceNight));

fs.writeFileSync("rooms.csv", JSON.stringify(dataJson));
// Display the file data
console.log(dataJson);
