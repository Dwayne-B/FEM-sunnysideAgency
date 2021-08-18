# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview
FEM-Junior level-challenge
### The challenge
Your challenge is to build out this landing page and get it looking as close to the design as possible.

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Design preview for the Sunnyside agency landing page coding challenge](./design/desktop-preview.jpg)


### Links

- Solution: [My solution](https://www.frontendmentor.io/solutions/sunny-side-agency-q35t8GwUp)
- Live Site: [Demo](https://dwayne-b.github.io/FEM-sunnysideAgency/)

## My process
I follow a simple yet effective workflow utilizing jira to maintain steady progress.
Design[:white_check_mark] -> Develope -> Test -> Done
Luckily Front-end Mentor provided the designs
#### Work flow

- Review the design 
- Create project files 
- Initialize a git repo
- Configure gulpfile.js
- Init a package.json
- Structure HTML
- Base CSS
- Mobile first development
- css for breakpoints 
- Add functionality with js
- Test for cross browser compatibility

### Built with

- Semantic HTML5 markup
- CSS 
- JS
- Flexbox
- Mobile-first workflow




### What I learned

I improved my file structure and organization.
I Practiced good ol' Flexbox which I love. 
Onto solidifying my knowledge of grid.

snippets

## The challenge did not include any significant animaitons so I added a keyframe animation on the arrow. I like using keyframes for simple things like this to enhance the experience.
```css
  .arrow{
        animation-name:animate ;
        animation-iteration-count: infinite;
        animation-direction:alternate;
        animation-timing-function: ease-in-out;
        animation-duration: 2s;
        cursor: pointer;
    }
    @keyframes animate {
        0%{transform:translateY(0%)}
        100%{transform:translateY(25%)}
        
    }
```


### Continued development

build out the rest of the pages
- About 
- Services 
- Projects


### Useful resources
- flexbox [css tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)



## Author

- portfolio - [Dwayne Bynum](https://dwaynebynumtech.netlify.app/)
- Frontend Mentor - [@DABax47](https://www.frontendmentor.io/profile/DABax47)


