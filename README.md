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

1. Introduction
2. Research
3. Sketching
4. Design
5. Build!
6. Next Steps
7. Conclusion

## Introduction

The prompt for this project was to design and build a landing page for the PPC term "Bartending Certification". The page is intended to get the user to sign up for one or more of the courses offered by the platform the landing page advertises. I wanted to make sure to consider marketing needs, so I spent the first half of the sprint focused on research and design. 

After the visual design and the MVP-level of interaction were planned, I moved on to building the project with Vue.js, which I'm a bit new to. While I considered building the page with vanilla HTML/CSS/JS, I have been hearing great things about Vue.js and thought it would be a powerful tool for this particular project. Though there ha been a learning curve, Vue.js helped me bring some of the functionality to life with slightly less work than expected. Yay!

As a next step, I would recommend doing some rounds of user testing, launching with a few variants, and keeping track of the data. 

## Research

The research for this project was two-fold: Learning more about best landing page practices and getting an understanding of the user for this particular project. 

I read several articles about PPC, SEO, and designing or writing for landing pages. Most of this research suggests that there are a few critical pieces to include in a landing page, much of which is content-driven. That said, some design patterns emerged from the trends, including lots of whitespace, short copy pieces, and examples of the product in context. One surprise to me was realizing multi-step forms actually perform better than single-page forms, the idea being that you start the user off with low-stakes questions (like survey responses or preferences) to hook them in and then bring up the more sensitive information (like email or phone number) later in the flow. These best practices informed a lot of what you see in the Bartendr project.

The other side of the research was interviewing a few bartender friends of mine. The world of Bartending was a bit of an enigma to me before embarking on this project, but in addition to my informal conversations I also looked at competitor products like Learn2Serve.com and read articles about general experiences behind the bar. My biggest takeaway from this part of my research was understanding where the user is coming from and what they really want out of this page. It became clear that while some folks use bartending as a means to supplement their income while a lot of others stay in the industry for years out of love for the atmosphere and pride in their work. On both ends of the spectrum, tips are high motivators. Reading these experiences helped me define my loose user personas and later write the testimonials in the content.

By chance, I came across the User Centered Design Canvas from TheRectangles.com during this sprint. I wrote a quick version of what the canvas looked like for this project in my notes. This exercise really helped me organize my thoughts for the sketching phase.

## Sketching

During the sketching phase I tried out a lot of different approaches, including a few that I still hope to explore later on. Using the information from my research and the UCDC exerise, I narrowed in on starting the flow with asking the user their goals. I assume that the product for this landing page will offer multiple types of courses, so I planned for what those flows might look like. The rest of the page (testimonials, benefits, etc) were a little more straight forward and informative, so I knew the hero area would be responsible for the more interesting and playful interaction. 

I toyed around with even incorporating illustration, defining 3 levels of bartenders via a drawing of different bartenders. Though I definitely want to explore that direction because I think it could be a cute differentiator, it ended up making more sense to simplify so that the mobile and desktop experiences could be quick and straight-forward.



## Design

After getting a handle on the direction my sketches were taking, I took to the Sketch app on my computer to put it all on the screen and flesh the ideas out. 

### Visual Design

I kept coming back to wanting to "modernize" this industry after seeing so many competitor producs with really dated web design. Rubik from Google Fonts won out as the cool contender for the emotional goal I was going for. I chose a purple/red color scheme to feel a little more bold while hinting at wine (what can I say, I've got a preference!). I pushed the color a bit by playing with gradients and the subtle, semi-transparent animation on the hero brings motion to this part of the page.


On a project with more time and budget, I would highly recommend shooting custom photography or incorporating some other bespoke elements. However, I found some great photos on Unslpash for the more creative elements on the page (the fake video and the hero background) and got some user photos from Diverse UI Faces to bring personality to my testimonials section.


### Writing Copy

I found that even though I would normally use Lorem Ipsum to create the mock ups, the success of a page like this is critically affected by tone and copy. With the marketing needs of the page in mind, it made sense to show what that copy could look like. 

I tried to keep the tone light and conversational and incorporated a finding about writing in the 2nd person (for "you"). Several articles argued that writing for "you" tends to be more effective than writing from the "We" perspective. This constraint helped me really focus on what the most effective and succinct copy could look like.



## Build

While I spent a good chunk of time focused on research and design, I still had the itch to try a new framework as opposed to building something with basic HTML/CSS and vanilla Javascript. From what I had learned about Vue.js at that point, it seemed like a powerful tool that would work for more complicated interaction down the line. However, it didn't take too long to get up and running with webpack and understanding the structure of a Vue app. 

The template structure makes a lot of sense once you get the hang of it. While the app behaves the way I intend, I would like to spend more time properly abstracting functionality into multiple components rather than the one, fairly robust component I have in LandingPage.vue.

More notes about the structure can be found in the comments throughout the code.


## Next Steps

At this phase, I would love to plan more features and functionality to the page, such as building how the email sign up behaves and designing alternate ways to display the "example" of the product.

The most important next step after launch is testing. Landing pages like this are great use cases for trying different CTA copy (in fact, I considered a different tone of voice entirely earlier on) or even varied content. As always: iterate, iterate, iterate!


## Conclusion

I learned quite a bit during this project that I will take-away with me for future work:

* Multi-step forms can be incredibly powerful for getting users to completion
* The User Centered Design Canvas can quickly organize business goals against user goals and bring focus to the design process
* Vue.js has a lot to offer and helped me get up and running really fast.

