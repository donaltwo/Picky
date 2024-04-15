# Picky!

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
Picky is a web app that allows users to click on 5 flavours sweet, sour, bitter, umami, savoury  and 5 textures liquid,crispy,creamy, soft  & hard as well as filter by dietary category meat,vegan,vegetarian to help them decide what they want to eat, taking the indecisiveness away around meal time. There's also options to show them call stored options, give a random one and to reset the selected food.
A form is used to allow the user to tag and submit their own custom food choice to the web app.

Audience, people with dietary requirements, neurodivergent people or anyone who is picky with what they like to eat.

**User Case Scenarios**:

1. A person with dietary requirements, who wants to use Picky! to easily find meals that suit their taste preferences, so that they can confidently choose meals that align with their dietary needs without spending excessive time browsing through menus or recipes.
 
2. Neurodivergent people often struggle with decision-making, especially when it comes to food choices. With Picky!, I hope to simplify the process for them by having them select preferred flavors and textures, allowing them to make meal decisions more efficiently in a fun and quick web app way.
  
3. People often find themselves stuck in a cycle of indecision during mealtime. Picky! provides these users with a solution by offering a tailored selection of meals alleviating the stress of deciding what to eat next.

Idea: Using JavaScript code a meal picker based on what flavour and texture you want to eat by having an interactable 

# Preparation Phase
I made wireframes in Balsamiq to give a rough estimation of what I wanted the interface to look like. I decided initially that I wanted to select a flavour and texture to get food results by that tag.

**Flavour Buttons**

![Wireframe flavour](https://github.com/donaltwo/Picky/assets/155965788/082ca0d7-50a0-4c32-8508-b5cd82bb3876)

**Texture Buttons**

![Wireframe texture](https://github.com/donaltwo/Picky/assets/155965788/3592e62c-634b-4020-9d1c-48375e7392e0)

# Features

1.**Splash Screen**

Using Javascript I coded in Javascript and CSS q quick welcome message giving the user the name and function of the web app.

![Splash screen welcome message](https://github.com/donaltwo/Picky/assets/155965788/fa05d549-a522-4cd6-b6bb-216f33e26956)

2.**Animated logo using CSS and HTML**

A bouncing text saying Let's get Picky using HTML and CSS to move the etxt in an up and down loop.

![logo](https://github.com/donaltwo/Picky/assets/155965788/76d071ce-3d68-47a9-ba6f-cf202c8e5576)
3.**Flavour Buttons**
All the five flavours are sweet,sour,bitter,umami and savoury.
![Flavour buttons](https://github.com/donaltwo/Picky/assets/155965788/af66032e-0e7d-46ec-bb9e-92741653b819)

3.**Texture Buttons**

Five textures provided liquid, crispy, soft, hard and creamy.

![Texture buttons](https://github.com/donaltwo/Picky/assets/155965788/deddd6e4-d04c-423e-9b6a-e167e0cdf597)

**Additional buttons**

4.**Surprise me button**

Provides a user random meal from an array. 

![Random](https://github.com/donaltwo/Picky/assets/155965788/5abbf8ff-29a9-4d1d-9ed5-f866c2a61980)

5.**Show all button**

Displays all meals hosted on a web app.

![Show all](https://github.com/donaltwo/Picky/assets/155965788/57d57e84-598b-467b-81fc-f8316a1de488)

6.**Reset button**

Clears current filter selection.

![Reset](https://github.com/donaltwo/Picky/assets/155965788/244ba117-e0ab-47b4-b020-b5f8bd1f63f9)

7.**Form with dropdowns for user to submit their own custom food**

Form that allows users to submit their own food and have it tagged using the dropdown by flavour,texture and dietary category with the Add Food button to submit the form and log the food locally using Javascript.

![Form for users to add food](https://github.com/donaltwo/Picky/assets/155965788/6c53cd8d-c6a9-45ae-9e98-c792e814637b)

8.**Footer**

Footer with my own name and year of creation for the project.

![Authourfooter](https://github.com/donaltwo/Picky/assets/155965788/82b0a152-6b24-48cc-b8f3-682f3d9e4a0d)

 # Testing
[Am I Responsive? Showing Picky! on mutiple devices with different devices](https://ui.dev/amiresponsive?url=https://donaltwo.github.io/Picky/)
 ![AmIResponsive](https://github.com/donaltwo/Picky/assets/155965788/2b951335-c075-4b53-b4e1-cb96da542fad)


# Table of Testing Features

| Feature               | Description                                                                         | Pass/Fail |
|-----------------------|-------------------------------------------------------------------------------------|-----------|
| Splash Screen         | Splash screen displays on website opening and times out after 5 seconds.            | Pass      |
| Logo                  | Logo is clear and loops through animation transform rules in CSS.                   | Pass      |
| Sweet Button          | Filters through food and shows food objects tagged as sweet.                        | Pass      |
| Sour Button           | Filters through food and shows food objects tagged as sour.                         | Pass      |
| Bitter Button         | Filters through food and shows food objects tagged as bitter.                       | Pass      |
| Umami Button          | Filters through food and shows food objects tagged as umami.                        | Pass      |
| Savoury Button        | Filters through food and shows food objects tagged as savory.                       | Pass      |
| Crispy Button         | Filters through food and shows food objects tagged as crispy.                       | Pass      |
| Liquid Button         | Filters through food and shows food objects tagged as liquid.                       | Pass      |
| Soft Button           | Filters through food and shows food objects tagged as soft.                         | Pass      |
| Hard Button           | Filters through food and shows food objects tagged as hard.                         | Pass      |
| Meat Button           | Filters through food and shows food objects tagged as having meat.                  | Pass      |
| Vegetarian Button     | Filters through food and shows food objects tagged as being vegetarian.             | Pass      |
| Vegan Button          | Filters through food and shows food objects tagged as being vegan.                  | Pass      |
| Surprise Me Button    | Cycles through food and shows a random food object.                                 | Pass      |
| Show All Button       | Shows all food hardcoded and added by the user through a form.                      | Pass      |
| Reset Button          | Clears all food items for the web app allowing the user to select a new button.     | Pass      |
| Meal Input            | Input field allowing custom text; displays required if the user submits blank.      | Pass      |
| Flavour Dropdown      | Allows users to tag the food object by flavour.                                     | Pass      |
| Texture Dropdown      | Allows users to tag the food object by texture.                                     | Pass      |
| Dietary Category Dropdown | Allows users to tag the food object by dietary category.                        | Pass      |
|Add Food Button   | Completes the form using Javascript storing the food object and tagging it appropiately. | Pass      |

# HTML Validation W3C Validation result no errors.

![W3C Validaiton](https://github.com/donaltwo/Picky/assets/155965788/d2962b2d-c5cb-4eee-babe-ca3c81f2b8e8)

# CSS Validation - Jigsaw Validation result no errors.
<p>
    <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    </a>
</p> 

 #  Javascript Validation jshint Validation result: no errors.
 
 ![Jshint](https://github.com/donaltwo/Picky/assets/155965788/6235566e-d3bf-46e3-b765-0010152a424c)
      |                                  
 # Lighthouse Scoring for Mobile/Desktop = Perfect Score!

**Lightouse testing rates the beformance, SEO and accesibility of the web app. Getting 100 reflects that the web app is optimized for permance, search engines and accesible to all users.
 
![Lighthouse Results](https://github.com/donaltwo/Picky/assets/155965788/e5e3e9d7-a102-4585-8d30-ae98d197b0b2)

# Known Issues
There are no present known issues with this web app, in its current version.
# Deployment 
I deployed this web app via GitHub Pages was by doing the following steps:

Signing into GitHub.

1.Finding the repository.

2.Navigating to the "Settings" option in the menu bar.

3.Proceeding to the "Pages" tab in the sidebar on the left.

4.Under "Source," select the "Master" branch from the dropdown menu.

5.Click the save button to apply the changes.

6.Once saved, the page will update, displaying the message: "Your site is ready to be published at [https://donaltwo.github.io/Picky/](Picky)."

# Media
The emojis code is the only visual media to give a more fun and dynamic element to the buttons and the HTML code for this was provided by [SYMBL](https://symbl.cc/en/)

# Credits & Acknowledgements
Thanks to my Code Institute mentor Dick V for his feedback and for the below resources in shaping this project.

Code Institute Resources
-[Love Maths Walkthrough Project](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+3)

 YouTube Resources
  - [Learn HTML buttons in 5 minutes!](https://www.youtube.com/watch?v=tDqTXipQmBU)
  - [Creating A Simple Website Intro Screen (Splash Screen) Using HTML / CSS / Vanilla JavaScript](https://www.youtube.com/watch?v=MOlaldp1Fv4)
  - [Dropdown filter for HTML tables using JavaScript and CSS](https://www.youtube.com/watch?v=tYdlt9q6Iug)
  - [How to use the Filter method in JavaScript to search and filter JSON data](https://www.youtube.com/watch?v=0WPCyqW6N7Y)
 W3Schools
  - [Filtering Elements](https://www.w3schools.com/howto/howto_js_filter_elements.asp)
  - [JavaScript Event onfocus](https://www.w3schools.com/js/tryit.asp?filename=tryjs_event_onfocus)
  - [Alerts in JavaScript](https://www.w3schools.com/howto/howto_js_alert.asp)
 freeCodeCamp
  - [JavaScript Array of Objects Tutorial](https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/)
  - [CSS Button Styles](https://www.freecodecamp.org/news/css-button-style-hover-color-and-background)
  - [Creating a Random Meal Generator](https://www.freecodecamp.org/news/creating-a-random-meal-generator/)
  codedamn
  - [Submit Form with JavaScript](https://codedamn.com/news/javascript/submit-form-with-javascript)
 Mozilla Developer
  - [Working with JavaScript Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)
Tutorials Point
  - [CSS Animation - Bounce](https://www.tutorialspoint.com/css/css_animation_bounce.htm)
SYMBL Emojis
  -  [SYMBL](https://symbl.cc/en/)
