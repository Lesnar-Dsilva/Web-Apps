# Web-Apps
These are my projects that involving using HTML 5, CSS 3 and JavaScript

In this project I learned about: ...That you may have to use multiple forEach() methods in a single project to allow for intended functionality.

This occured when trying to remove the "active" class from every element such as the image, tab buttons, and text. With the buttons it required me to nest a forEach() method within a forEach() eventListener() method because otherwise all the tabs would be considered active and none would return to their original color.

I used an if statement to search for the image that relates to the tab button that has been clicked by grabbing the "data-id" attribute from the button and searching the classList of the images, so that only one image would be active.

I used a variable to store the element that is grabbed by the document.getElementById() method by using the "data-id" from the tab buttons, and then adding "active" to its classList. The reason I have used different techniques for the images and text is because, I used what I thought I appropriate during its creation, an alternative to the image.forEach() function would be:

      let img = document.querySelector(`.${id}`);
      img.classList.add("active")
      
I could have declared a new variable and done the same, and with the text I could have:

      if (e.id.includes(id)) {
        e.classList.add("active");
      }

This is another solution when I use the loop through the text element, and find the elements id (I also found out that includes is used for strings, while contains is used for object data types...interesting).

Thats it I just wanted to flex my JavaScript knowledge, I used various method in this project elapsing 4hrs because I spent time writing this and also experiment with the webpages compatability with smaller screens and also finding alternative solutions to my original solution for the project.

Thanks for reading!
