/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

//1. adding two classes to the header element
 document.querySelector("header").classList.add("Note", "Here")
 //2. removing one class
 document.querySelector("header").classList.remove("Here")

//3. adding a new attribute to an element
document.querySelector("img").setAttribute("alt3", "some value")
//4. requesting the value of the attribute
//type 'document.querySelector("img").getAttribute("alt3")' in console OR
console.log(document.querySelector("img").getAttribute("alt3"))
//5. changing the value of the attribute
document.querySelector("img").setAttribute("alt3", "something else")

//6. adding some inline css to an element by specifying the style property and setting its vlaue
document.querySelector("footer").style.backgroundColor = "grey"
//7. querying the style property of an element in the console to get a list of all the style properties available
console.log(document.querySelector("footer").style)