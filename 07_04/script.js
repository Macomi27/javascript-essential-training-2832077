/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

// 1
Academics = ["book", "pen", "table", "chair", "eraser", "chalk", "blackboard", "pencil"]
console.log(Academics);

//2
Academics.pop()
console.log(Academics);

//3
Academics.unshift("pencil")
console.log(Academics);

//4
Academics.sort()
console.log(Academics);

//5
let Search = Academics.find(function (item) {
    if (item.length >= 6) {
        return item;
    }
})
console.log("Academics item length greater than or equal to six: ", Search)

//6
Academics.shift(Search)
console.log(Academics)