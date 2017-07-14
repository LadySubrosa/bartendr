# bartendr

> A Vue.js project for a Bartender Certification PPC landing page


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
```

## Contents

1. Summary
2. Introduction
2. Research
3. Sketching
4. Design
5. Build!
6. Next Steps
7. Conclusion

## Summary

Welcome to Bartendr! An awesome, fictional app that lets users quickly get certified to serve and sell liquor as well as take bartending coursework to up their skills and get more tips!

The prompt for this project was to design and build a landing page for the PPC term "Bartending Certification". I wanted to make sure to consider marketing needs, so I spent the first half of the sprint focused on research and design. 

After the visual design and the MVP-level of interaction were planned, I moved on to building the project with Vue.js. While I considered building the page with straight-up HTML/CSS/JS, I have been hearing great things about Vue.js and thought it would be a powerful tool for this particular project. Though there has been a learning curve, Vue.js helped me bring some of the functionality to life with slightly less work than expected. Yay!

As a next step, I would recommend doing some rounds of user testing, launching with a few variants, and keeping track of the data. I also have a few more ideas for features out of scope in this project sprint. All in all, I really enjoyed working on this page and look forward to playing with Vue.js some more to leverage its capability for really cool marketing experiences.


## Introduction

Bartendr is a fictional product that allows users to get their Texas alcohol handler license and take other courses about bartending. The goal of this page is to drive the user to a purchase flow and sign up for a course. The use case that informed a lot of the page design was that this page is what users would see after clicking a link in the search results for "Bartender Certification".

The project was fairly open-ended, so I ran with the content, design, and code. The main criteria I followed were to build great code and to deliver on the promise of the search result, following best practices for PPC marketing.


## Research

The research for this project was two-fold: Learning more about best landing page practices and getting an understanding of the user for this particular project. 

### Best Marketing Practices

I read several articles about PPC, SEO, and designing or writing for landing pages. Most of this research suggests that there are a few critical pieces to include in a landing page, much of which is content-driven. That said, some design patterns emerged from the trends, including lots of whitespace, short copy pieces, and examples of the product in context. I also saw a lot of recommendations NOT to link the logo to anything for a page like this, where the desired goal is to drive the user to a conversion path. A lot of articles suggested to have a simple footer after all the rest of the content if users need to navigate to to other parts of the site. I ended up including a sign-in link in the top right JUST in case the user was returning to their account from this path, but otherwise the purpose of the page is singular until you scroll down a little further to the footer area.

One other marketing surprise to me was that multi-step forms actually perform better than single-page forms, the idea being that you start the user off with low-stakes questions (like survey responses or preferences) to hook them in and then ask for the more sensitive information (like email or phone number) later in the flow. These best practices informed a lot of what you see in the Bartendr project.

### The World According to Bartenders

The other side of the research was interviewing a few bartender friends of mine. The world of Bartending was a bit of an enigma to me before embarking on this project, but in addition to my informal conversations I also looked at competitor products like Learn2Serve.com and read articles about general experiences behind the bar. My biggest takeaway from this part of my research was understanding where the user is coming from and what they really want out of this page. It became clear that while some folks use bartending as a means to supplement their income, a lot of others stay in the industry for years out of love for the atmosphere and pride in their work. On both ends of the spectrum, tips are high motivators. Reading these experiences helped me define my loose user-personas and later write the testimonials in the content.

By chance, I came across the User Centered Design Canvas from TheRectangles.com during this sprint. I sketched out a quick version of what the canvas looked like for this project in my notes. This exercise really helped me organize my thoughts for the sketching phase.


## Sketching

During the sketching phase I tried out a lot of different approaches, including a few that I still hope to explore later on. Using the information from my research and the UCDC exercise, I narrowed in on starting the flow by asking the user their goals. I assume that the product for this landing page will offer multiple types of courses, so I planned for what those flows might look like and what the architecture might be. The rest of the page (testimonials, benefits, etc) were a little more straight forward and informative, so I knew the hero area would be responsible for the more interesting and playful interaction. 

I toyed around with even incorporating illustration, defining 3 levels via a drawing of different bartenders. I think going in an illustrative direction could be a cute differentiator, but for the scope of this project it ended up making more sense to simplify so that the mobile and desktop experiences could be quick and straight-forward.



## Design

After getting a handle on the direction my sketches were taking, I took to the Sketch app on my computer to put it all on the screen and flesh the ideas out. 

### Visual Design

I kept coming back to wanting to "modernize" this industry after seeing so many competitor products with really outdated web design. Rubik from Google Fonts won out as the cool contender that was easy to read and felt like it fit my vision. For color, I chose purple and red to push in bold direction while hinting at wine (what can I say, I've got a preference!). I pushed the color a bit by playing with gradients using these colors. The subtle, semi-transparent animation on the hero brings motion to this part of the page.


On a project with more time and budget, I would highly recommend shooting custom photography or incorporating some other bespoke elements. However, I found some great photos on Unslpash for the more creative elements on the page (the fake video and the hero background) and got some user photos from Diverse UI Faces to bring personality to my testimonials section.


### Writing Copy

I found that even though I would normally use Lorem Ipsum to create the mock ups or even build a project like this as a proof of concept, the tone and word choice in a page like this is critical to its success. With the marketing needs of the page in mind, it made sense to show a more approximate version of the copy. 

I tried to keep the tone light and conversational. In this, I incorporated a finding about writing in the 2nd person (for "you"). Several articles argued that writing for "you" tends to be more effective than writing from the "We" perspective. This constraint helped me really focus on what the most effective and succinct copy could look like.



## Build

While I spent a good chunk of time focused on research and design, I still had the itch to try a new framework as opposed to building something with basic HTML/CSS and vanilla Javascript. From what I had learned about Vue.js at that point, it seemed like a powerful tool that would work for more complicated interaction down the line. However, it didn't take too long to get up and running with webpack and to understand the basics and structure of a Vue app. 

The template structure makes a lot of sense once you get the hang of it. While the app behaves the way I intend, I would like to spend more time properly abstracting functionality into multiple components rather than the one, fairly robust component I have in LandingPage.vue.

More notes about the structure can be found in the comments throughout the code.


## Next Steps

At this phase, I would love to plan more features and functionality for the page, such as building how the email sign up behaves and designing alternate ways to display the "example" of the product.

The most important next step after launch is testing. Landing pages like this are great use-cases for trying different CTA copy (in fact, I considered a different tone of voice entirely earlier on) or even completely varied content. As always: iterate, iterate, iterate!


## Conclusion

I learned quite a bit during this project that I will take-away with me for future work:

* Multi-step forms can be incredibly powerful for getting users to completion
* The User Centered Design Canvas can quickly organize business goals against user goals and bring focus to the design process
* Vue.js has a lot to offer!

I look forward to getting a deeper understanding of Vue.js and working on more landing experiences knowing everything I learned from this work.

Cheers! 🍸

