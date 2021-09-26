# Web-Apps
These are my projects that involving using HTML 5, CSS 3 and JavaScript

In this project we learn about:

::webkit-scrollbar && ::website-scrollbar-thumb && ::webkit-scrollbar-track in CSS

scrollTo() method in JavaScript.

This project took me 6hrs25mins to complete, being by far the project with the largest duration spent on it unless you consider the Calculator which took a whole month for me to learn, but that project, in reality, took me 2hrs to build after I finished a month of CodeWars.

This projects simple goal is to create a professional website, but this time focusing on the scroll events on the webpage because I have never dwelled into this part of web development until now, this was unknown territory for me, the aspect that took me the longest to figure about was how to overlays HTML elements over each other, I tried display: flex, but that posed an issue of using negative margins, and according to the w3 validation it returns an error that negative margins are illegal. So, I tried to use position: absolute, but this posed an issue of fixed ratios across different screens as it wouldn't centre anything. Then I found out that display: grid can overlay elements by using the z-index property and grid-column and grid-row properties, which was successful.

Now comes the JavaScript, the up button (return to top) was easy to implement and get it working. The issue was with the navigation buttons scrolling to the elements on the same webpage because it would overshoot it, this was due to the fixed header being present which HTML won't consider, so JavaScript becomes crucial to work around this. I used the scrollTo() method using the href attribute in every navigation menu link list item, then using that variable containing the attribute, use the querySelector to locate the element that is being provided, in addition to that to combat the fixed header height I provided a value of 90 because my header height is 100. Finally, use the window.scrollTo() method, because we are telling the window to move and scroll to a specific section using coordinates, provide 0 as the x value because we aren't moving horizontally in this case and the rest, input the name of the variable it being targeted to move to and add .offsetTop it returns the pixels that the element is away from the outer border then minus that distance using the header height variable.

Thanks for reading!
