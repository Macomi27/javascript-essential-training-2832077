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
console.log("Academics array: ", Academics);

//2
Academics.pop()
console.log("Removing the last item in the array: ",Academics);

//3
Academics.unshift("pencil")
console.log("Placing the last element as first in the array: ", Academics);

//4
Academics.sort()
console.log("Sorted array: ",Academics);

//5
let Search = Academics.find(function (item) {
    if (item.length >= 6) {
        return item;
    }
})
console.log("Academics item length greater than or equal to six: ", Search)

//6
Academics.splice(Academics[2], 1);
console.log("Array without item at index 2: ", Academics);