# Fitness Calculator


## Portfolio Project 2: _Interactive Front-End Development_
This is a fitness calculator for calculating a persons Basal Metabolic Rate (BMR) and Body Mass Index (BMI). The page has been designed for users age 20 or older who are looking for an easy way to calculate both values at the same time.

![Mockup picture of Fitness Calculator](/assets/images/portfolio2mockup.png)

## Demo
### GitHub
https://github.com/michaelhochlan/portfolio2

### GitHub Pages
https://michaelhochlan.github.io/portfolio2/


# Table of Contents
+ [User Experience](#user-experience)
  + [User Stories](#user-stories)
  + [Design](#design)
    + [Colour Scheme](#colour-scheme)
    + [Typography](#typography)   
  + [Wireframes](#wireframes)
+ [Features](#features)
  + [Existing Features](#existing-features)
  + [Future Features](#future-features)
+ [Technologies Used](#technologies-used)
  + [Languages Used](#languages-used)
  + [Frameworks Libraries and Programmes Used](#frameworks-libraries-and-programmes-used)
+ [Testing](#testing)
  + [Validator Testing](#validator-testing)
  + [Lighthouse Testing](#lighthouse-testing)
  + [Responsiveness](#responsiveness)
  + [Testing User Stories](#testing-user-stories)
  + [Problems Encountered](#problems-encountered)
+ [Deployment](#deployment)
  + [Deployment through GitHub Pages](#deployment-through-gitHub-pages)
+ [Credits](#credits)
  + [Code](#code)
  
# User Experience

## User Stories
* The user should right away recognize the input fields and enter his/her/it values.
* The user should receive the results by pressing the calculate button.
* The user should be able to clear all fields by pressing the reset button.
* The user should be able to get more information by navigating to BMR and BMI in the navigation bar.
* The user should be able to contact us.
* The user should get a success message when sending the contact form.
* The user should have the option to reset the contact form at any time.
* By using this calculator the user get's an all in one solution.


## Design

The goal of this project is to build a simple and effective tool to calculate both BMI and BMR at the same time and to provide basic informations on the subjects of BMI and BMR.

#### Colour Scheme
The colour scheme was chosen to clearly stick out of the outer space theme and support the intuitiv navigation.  
<br>
<br>
 
 #### Typography

The font-family chosen was Nunito which I found on Google Fonts. I chose it for the smooth edges and easy readibility.

<br>

## Wireframes

Wireframes were sketched on a napkin.

# Features

## Current Features

### <em>Page Layout</em>
The page layout has been kept simple, using just a centered design to make it easy to adopt it on smaller screen sizes. 
<br>
<br>

![Picture of a page](/assets/images/pageBmr.png)

<br>
<br>

The background image was chosen to give it a neutral and appealing appearance. 

<br>
<br>

 ![The background picture](/assets/images/background.jpg)

 <br>
 <br>

### <em>Calculator Information</em>

As soon as the inputs are done and the user hits enter, the BMI and BMR will be displayed in a bright red color in an clearly marked field.
In case the user entered something wrong he can press reset to clear all the fields. The Reset as well as the Calculate button are bright red
and clearly visible.
 
 <br>
 <br>
 
 ![Picture of the Fitness Calculator](/assets/images/calculator.png)

 <br>
 <br>
### <em>Navigation</em>

For the navigation bar was the color black chosen to enhance the contrast and make it easily detectable. The active color is green, which fits
nicely in the overall appearance.

<br>
<br>

![Picture of the Navigation Bar](/assets/images/navbar.png)

 <br>
 <br>


### <em>Responsive Design</em>

There are countless free apps for phones and tablets available to calculate the BMR and BMI. So this page will be most likely be viewed on computers.
I used for many values in the css percentages and fine tuned it with the Google Developer Tools.

#### <em>mobile</em>
 
![Picture of a page](/assets/images/iphone12pro.png)

#### <em>tablet</em>

![Picture of a page](/assets/images/ipodair.png) 
 #### <em>tablet - landscape view </em>

![Picture of a page](/assets/images/ipadminilandscape.png)


## Future Features
+ I would like to add more in depth informations.
+ I would like to add a calculation for targeted heart rate while exercising based on the calculated BMR and BMI.
+ I would like to change the color of the symbols to green, when chosen. So the female graphic would turn green when chosen and wise versa the male graphic
+ I would like to come up with a solution to make the page more attractive to transgender and gender neutral users, because you can only
choose between male and female, which might turn these users off.


# Technologies Used

## Languages Used
1. [HTML](https://en.wikipedia.org/wiki/HTML5) - To create the content of the page.
2. [CSS](https://en.wikipedia.org/wiki/CSS) - To style the page.
3. [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - For the interactivity of the page.

## Frameworks Libraries and Programmes Used
* [Google Fonts](https://fonts.google.com/) - for the used font.
* [Font Awesome](https://https://fontawesome.com//) - for the female and male logo as well as the logo.
* [Freepik.com](https://de.freepik.com/) - for the background image.
* [Visual Studio Code](https://code.visualstudio.com/) - as IDE.
* [GitHub](https://github.com/) -  for version control of an interactive web application up to deployment.
* [GitHubDesktop](https://gitpod.io/workspaces) - for version control.
* [GitHub Pages](https://github.com/moirahartigan/Ms1-Schools-Out-Childcare/settings/pages) - as a hosting platform.
* [Google Chrome Development Tools](https://developers.google.com/web/tools/chrome-devtools) - for testing code and media querries.
* [Beautifier](https://https://beautifier.io/) - used to beautify HTML, CSS and JavaScript code.
* [W3C validator](https://validator.w3.org/) - for validating HTML code
* [W3C Jigsaw](https://jigsaw.w3.org/css-validator/) - for validating CSS code
* [Jshint](https://jshint.com/) - as a linter for JavaScript code
* [Beautifier]https://beautifier.io/ - to beautify HTML, CSS and JavaScript
* [Fontawesome]https://fontawesome.com/ for the social media icons


# Testing
## Validator Testing
I used throughout the development process the following validators:


### <em>HTML Validator</em>

![Picture of HTML validator](/assets/images/indexchecker.png)
<br>
![Picture of HTML validator](/assets/images/bmrchecker.png)
<br>
![Picture of HTML validator](/assets/images/bmichecker.png)
<br>
![Picture of HTML validator](/assets/images/contactchecker.png)


  
### <em>CSS Validator</em>

![Picture of CSS validator](/assets/images/csschecker.png)
 
### <em>JavaScript Validator</em>    

![Picture of JavaScript validator](/assets/images/javascriptchecker.png)
 
## Lighthouse Testing
I used Chromes Lighthouse tools to test the site's performance.

## Responsiveness
Chrome DevTools was used to test the responsivesness of the pages.

## Problems Encountered

* According to w3c school there is a float: center but the validator doesn't aknowledge it
* I started out with a large javascript page and cut it more and more down by defining more functions with less code. The code checks out now, but when I run the fitness calculator now for the first time, it sometimes resets on it's own. Only the first time! After that it runs fine. I can't figure it out and it is too late for me to discuss it with my menthor. It started happening this morning.

# Deployment
## Deployment through GitHub Pages
This site was deployed through GitHub Pages using the following steps:

* On GitHub open the Repositories
* Choose the Repository you want to publish
* Choose Settings in the top menu
* In the side menu select Pages
* Under Source select Deploy from branch
* Under Branch select main and 7(root)
* click save and wait a moment and then refresh the page
* You will find the link to your page on the top under GitHub Pages
* Click Visit site
* The page is online

# Credits

Many Thanks to fwstudio for the free backgroundimage on de.freepik.com (<a href="https://de.freepik.com/fotos-kostenlos/beschaffenheit-der-hoelzernen-vorstaende_969740.htm#page=2&query=wooden%20background&position=3&from_view=search&track=ais">Bild von fwstudio</a> auf Freepik)

## Resources I used

* I used https://www.calculator.net/bmr-calculator.html for the BMR informations.
* I used https://www.calculator.net/bmi-calculator.html for the BMI informations.
* I used https://www.w3schools.com/howto/howto_css_contact_form.asp to get a quick solution for the contact form and modefied it to fit my needs.
* I used https://www.w3schools.com/howto/howto_js_topnav.asp to get a quick solution for the Top Navigation and modefied it to fit my needs.
* I used http://de.freepik.com for the background image, the logo and the female and male images on index.html