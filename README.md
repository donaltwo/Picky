# Picky

## Table of Contents

- [Introduction](#introduction)
- [Preparation Phase](#preparation-phase)
- [Features](#features)
- [Testing](#testing)
- [Validator Testing](#validator-testing)
- [Table of Testing Features](#table-of-testing-features)
- [Lighthouse Scoring](#lighthouse-scoring)
- [Known Issues](#known-issues)
- [Deployment](#deployment)
- [Media](#media)
- [Credits & Acknowledgements](#credits--acknowledgements)


# Introduction
Title: Picky! 
Picky allows users to click on 5 flavours sweet, sour, bitter, umami, savoury  and 5 textures liquid,crispy,creamy, soft  & hard as well as filter by dietary category meat,vegan,vegetarian to help them decide what they want, taking the indecisiveness away around meal time. There's alos options to show them call stored options, give a random one and to reset the selected food.
A form is used to allow the user to tag and submit their own custom food choice to the web app.

Audience, people with dietary requirements, neurodivergent people or anyone who is picky with what they like to eat.
1.User Case 1 
A person with dietary requirements, who wants to use Picky! to easily find meals that suit their taste preferences, so that they can confidently choose meals that align with their dietary needs without spending excessive time browsing through menus or recipes.
2.User Case 2
Neurodivergent people, often struggle with decision-making, especially when it comes to food choices. With Picky!, I hope to simplify the process for them by having them selecting preferred flavors and textures, allowing them make meal decisions more efficiently.
3.User Case 3
People often find themselves stuck in a cycle of indecision during mealtime. Picky! provides these users with a solution by offering a tailored selection of meals based  alleviating the stress of deciding what to eat next.

Idea: Using JavaScript code a meal picker based on what flavour and texture you want to eat by having an interactable 

# Preperation Phase
I made wireframes in Balsamiq to give a rough estimation of what i wanted the interface to look like. I decided initally that I wanted to select a flavour and texture to get food results by that tag.
![Wireframe flavour](https://github.com/donaltwo/Picky/assets/155965788/082ca0d7-50a0-4c32-8508-b5cd82bb3876)
![Wireframe texture](https://github.com/donaltwo/Picky/assets/155965788/3592e62c-634b-4020-9d1c-48375e7392e0)

# Feautures
1.Splash Screen
Using Javascript I coded in Javascript and CSS q quick welcome message giving the user the name and fucntion of the web app.
![Spalsh screen welcome message](https://github.com/donaltwo/Picky/assets/155965788/fa05d549-a522-4cd6-b6bb-216f33e26956)

2.Flavour Buttons
All the five flavours sweet,sour,bitter,umami and savoury.
![Flavour buttons](https://github.com/donaltwo/Picky/assets/155965788/af66032e-0e7d-46ec-bb9e-92741653b819)
3.Texture Buttons
4.Five testures proivided liquid, crispy, soft, hard and creamy.
![Texture buttons](https://github.com/donaltwo/Picky/assets/155965788/deddd6e4-d04c-423e-9b6a-e167e0cdf597)
Additional buttons
5.Suprise mme button
Proivdes user random meal from array. 
![Random](https://github.com/donaltwo/Picky/assets/155965788/5abbf8ff-29a9-4d1d-9ed5-f866c2a61980)
6.Show all button
Displays all meals hosted on web app.
![Show all](https://github.com/donaltwo/Picky/assets/155965788/57d57e84-598b-467b-81fc-f8316a1de488)
7.Reset button
Clears current filter selection.
![Reset](https://github.com/donaltwo/Picky/assets/155965788/244ba117-e0ab-47b4-b020-b5f8bd1f63f9)
8.Form that allows users to submit their own food and have it tagged using the dropdown by flavour,texture and dietary category with Add Food button to submit the form and log the food locally using Javascript.
![Form for users to add food](https://github.com/donaltwo/Picky/assets/155965788/6c53cd8d-c6a9-45ae-9e98-c792e814637b)

 # Testing
 
# HTML Validation
![W3C Validaiton](https://github.com/donaltwo/Picky/assets/155965788/d2962b2d-c5cb-4eee-babe-ca3c81f2b8e8)

# CSS Validation
Jigsaw Valiadtion result
<p>
    <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    </a>
</p> 

 #  Jshint Valiadtion result
 ![Jshint](https://github.com/donaltwo/Picky/assets/155965788/6235566e-d3bf-46e3-b765-0010152a424c)
      |                                  
 # Lighthouse Scoring
![Lighthouse Results](https://github.com/donaltwo/Picky/assets/155965788/e5e3e9d7-a102-4585-8d30-ae98d197b0b2)

# Known Issues
There are no present kown issues with this web app it's it's cuurrent version.
Deployment 
I deployed this web app via GitHub Pages was by doing the following steps:

Signing in to GitHub.
1.Finding the repository.
2.Navigating to the "Settings" option in the menu bar.
3.Proceeding to the "Pages" tab in the sidebar on the left.
4.Under "Source," select the "Master" branch from the dropdown menu.
5.Click the save button to apply the changes.
6.Once saved, the page will update, displaying the message: "Your site is ready to be published at [URL]."

# Media
The emojis code wis the only visual media and the HTML code for this was provided by [SYMBL](https://symbl.cc/en/)

# Credits & Acknowledgements
Thanks to my Code Institute mentor Dick V for his feedback and for the below resources in shaping this project.

Code Institute
Love Maths Walkthrough Project
 YouTube Resources
  - [Learn HTML buttons in 5 minutes!](https://www.youtube.com/watch?v=tDqTXipQmBU)
  - [Creating A Simple Website Intro Screen (Splash Screen) Using HTML / CSS / Vanilla JavaScript](https://www.youtube.com/watch?v=MOlaldp1Fv4)
  - [Dropdown filter for HTML tables using JavaScript and CSS](https://www.youtube.com/watch?v=tYdlt9q6Iug)
  - [How to use the Filter method in JavaScript to search and filter JSON data](https://www.youtube.com/watch?v=0WPCyqW6N7Y)
- W3Schools
  - [Filtering Elements](https://www.w3schools.com/howto/howto_js_filter_elements.asp)
  - [JavaScript Event onfocus](https://www.w3schools.com/js/tryit.asp?filename=tryjs_event_onfocus)
  - [Alerts in JavaScript](https://www.w3schools.com/howto/howto_js_alert.asp)
- freeCodeCamp
  - [JavaScript Array of Objects Tutorial](https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/)
  - [CSS Button Styles](https://www.freecodecamp.org/news/css-button-style-hover-color-and-background)
  - [Creating a Random Meal Generator](https://www.freecodecamp.org/news/creating-a-random-meal-generator/)
- codedamn
  - [Submit Form with JavaScript](https://codedamn.com/news/javascript/submit-form-with-javascript)
- Mozilla Developer
  - [Working with JavaScript Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)
  - [CSS Animation - Bounce](https://www.tutorialspoint.com/css/css_animation_bounce.htm)
- Stack Overflow
  - [Random Background Color for Buttons](https://stackoverflow.com/questions/61995995/how-to-give-random-background-color-to-list-of-buttons)
  - SYMBL Emojis
  -  [SYMBL](https://symbl.cc/en/)
