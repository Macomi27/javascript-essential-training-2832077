/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

import Book from "./Book.js";

const horror = new Book(
  "horror",
  "ghost in the shell",
  "Mike Edwards",
  1987,
  "finished"
)

console.log(horror)

const adventure = new Book(
  "adventure",
  "Jumanji: Welcome to the jungle",
  "Mike Edwards",
  2017,
  "Unread"
)

console.log(adventure)

const science_fiction = new Book(
  "Sci-Fi",
  "Journey to the moon",
  "Mike Peterson",
  1968,
  "ongoing"
)

console.log(science_fiction)

const Drama = new Book(
  "drama",
  "Empire",
  "Will Parker",
  2015,
  "Unread"
)

console.log(Drama)

const Animation = new Book(
  "Animation",
  "Alladin",
  "Mike Edwards",
  1995,
  "finished"
)

console.log(Animation)
