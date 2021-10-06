# Web-Apps
These are my projects that involving using HTML 5, CSS 3 and JavaScript

Hello, this is my improved Grocery List, it can also function as a To-Do List.

In this project I learnt:

localStorage
appendChild()
removeChild()
JSON.stringify
JSON.parse

The first grocery list app, I created didn't save any of the list items on the client side, so if the page were refreshed it would lose its content, I thought about this time implementing localStorage to allow for items to be stored and retrieved whenever the user visits the webpage.
The list needs to be constantly built up as more items are added, instead or creating a variable of the groceryList element, I opted to use appendChild() because it wouldnt mess with the formatting, unlike the use of += to add onto the innerHTHMl of groceryList. If the user needed to delete any item of the list, they could do so by clicking on the trash icon which would call the trashItem function to remove the selected child of the groceryList element using removeChild.
JSON.stringify and JSON.parse are used to convert the item and attribute values into strings to be stored into the localStorage because it only accept strings and .parse is used to return the correct data types for the stored values to be correctly displayed and used by JavaScript.

Thanks for reading!
