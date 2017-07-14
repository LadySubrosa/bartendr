<template>
  <div class="landingPage">
    
    <div id="sign-up-overlay" v-show="showSignup">
      <div id="signup-modal">

          <a href="" class="closeX" v-on:click.prevent="toggleSignup">X</a>
          <div class="modal-content">
          <h2>Try Bartendr Later</h2>
          <p>You know you want to try Bartendr, but maybe not this second. Sign up to get a reminder sent to your inbox.</p>
          <form id="reminder-signup">
              <label for="reminder-signup-email">Email Address</label>
              <input name="reminder-signup-email" type="email" placeholder="futuremixologist@email.com" />
            <input type="submit" value="Sign up for a Reminder" />
          </form>
          <p><a href="" v-on:click.prevent="toggleSignup">Close</a></p>
        </div>
      </div>
    </div>

    <section id="hero">
      <nav><a href="#" title="Sign In to Bartendr">Sign In</a></nav>
      <h1>Bartendr</h1>
      
      <div id="hero-content">
      
      <transition name="fade">  
        <div v-if="!showCourses" id="hero-step1" key="landing">
          <h2>A Modern Approach to your Bartender Certification. <br/>
            Quick. Legit. Actually Fun.</h2>
            <p>What are your goals?</p>
            <p v-for="goal in goalsList" class="goal-buttons">
             <input type="checkbox" class="goal-button" v-model="goal.selected" v-bind:id="goal.goalID" v-bind:true-value="true" v-bind:false-value="false"/>
             <label v-bind:for="goal.goalID">{{ goal.goalName }}</label>
            </p>
            
            <p id="next-step"  v-on:click.prevent="toggleCourseOptions" v-if="this.goalsSelected.length">
              <a href="">Next &gt;</a>
            </p>
            <p id="remind-later" v-on:click.prevent="toggleSignup" v-else>
              <a href="">Remind Me Later</a>
            </p>
        </div>

        <div v-else id="hero-step2" key="landing2">    
          <h3>Your Goals</h3>
          <p v-for="goal in goalsSelected">
            {{ goal.goalName }}
          </p>

          <div id="best-deal">
            <h3>Best Deal<span v-if="bestCourses.length > 1">s</span> for You</h3>

            <div class="option" v-for="course in bestCourses">
              <h4>${{ course.coursePrice }} {{ course.courseName }}</h4>
              <p>{{ course.courseDescription }}</p>
            </div>
            
              <p><a href="#" class="cta">Sign Up for Bartendr</a></p>
          </div>

          <p>
            <a href="">More about this course</a>
          </p>

          <div id="other-options">
            <h3>Other Options</h3>
            <div class="course-detail" v-for="course in coursesSelected">
              <p v-if="!course.coursePriority" class="course-name"><a href="#">${{ course.coursePrice }} {{ course.courseName }} &gt;</a><br/>
              <span class="course-description">{{ course.courseDescription}}</span></p>
            </div>
          </div>
          <p id="next-step"  v-on:click.prevent="toggleCourseOptions" v-if="this.goalsSelected.length"><a href="">&lt; Change Goals</a></p>
        </div>
      </transition>
    </div>

    </section><!-- End Hero -->

    <section id="features">
      <h2>Bartender Works for You</h2>
      <div id="features-list">
      <div class="feature" v-for="feature in features">
        <h3>{{ feature.featureTitle }}</h3>
        <p>{{ feature.featureDetail }}</p>
      </div>
    </div>
    </section> <!-- End Features -->

    <section id="example">
      <h2>Watch Bartendr in Action</h2>
      <div id="video">
        <img src="/static/img/video.jpg" width="960" height="540" alt="Watch and Learn how Bartendr makes learning bartending fun. Quick. Legit. Actually Fun." />
      </div>
    </section> <!-- End Features -->


    <section id="reviews">
      <h2>Praise from Pros</h2>
      <div id="reviews-list">
      <div class="review" v-for="review in reviews">
        <img v-bind:src="imgPath+review.img" v-bind:alt="'Photo of ' + review.reviewerName + ' from ' + review.reviewerWorkPlace" width="100" height="100"/>
        <h3>{{ review.reviewTitle }}</h3>
        <p>{{ review.fullReview }}</p>
        <div class="attributed">
          {{ review.reviewerName }} from {{ review.reviewerLocation }} <br/>
          <span class="credential">{{ review.reviewerJobTitle }} at {{ review.reviewerWorkPlace }}</span>
        </div>
      </div>
    </div>
    </section> <!-- End Reviews -->

    <section id="partners">
      <h2>Popular Partners</h2>
    </section><!-- End Partners -->

    <section id="try-sample">
      <div id="signup-content">
      <h2>Try a Sample</h2>
      <p>Not sure if you’re ready to get your TABC certification in as little as 2 hours? Try a sip-sized bartending tip in your inbox. If you enjoy the tip, you’ll love the full-glass experience!</p>
      <form id="sample-signup">
          <label for="sample-signup-email">Email Address</label>
          <input name="sample-signup-email" type="email" placeholder="futuremixologist@email.com" />
        <input type="submit" value="Sign up for a Sample" />
      </form>
      </div>  
    </section> <!-- End Sample Sign Up -->

  </div>

</template>

<script>

// Import Object data from JSON files.
import courseList from '@/assets/courseList.json'
import featuresList from '@/assets/features.json'
import reviewsData from '@/assets/praise.json'
import goalsList from '@/assets/goals.json'

export default {
  name: 'landingPage',
  data () {
    return {
      // Data from JSON Imports.
      goalsList: goalsList, // List of customer goals
      courses: courseList, // List of available Bartendr Courses
      reviews: reviewsData, // Content for Reviews/Praise section
      features: featuresList, // List of Bartendr Features
      selectedKeywords: [], // Keywords from goals user selects
      showCourses: false, // Template logic to move user from step 1 (goals selection) to step 2 (curated list).
      showSignup: false, // Template logic for "Remind Me Later" functionality
      imgPath: 'static/img/' // Path for assets
    }
  },
  computed: {
    // Filter the list of goals based on user selection on step 1.
    goalsSelected: function () {
      return this.goalsList.filter(function (goal) {
        return goal.selected
      })
    },
    // Filter list of courses based on user selection
    coursesSelected: function () {
      var keywords = this.keywordsSelected()
      return this.courses.filter(function (course) {
        var hasKeyword = false
        keywords.forEach(function (keyword) {
          if (course.courseKeywords.indexOf(keyword) > -1) {
            hasKeyword = true
          }
        })
        return hasKeyword
      })
    },
    // Filter list based on whether its flagged as a marketing priority
    bestCourses: function () {
      var keywords = this.keywordsSelected()
      return this.courses.filter(function (course) {
        var hasKeyword = false

        keywords.forEach(function (keyword) {
          if (course.courseKeywords.indexOf(keyword) > -1) {
            hasKeyword = true
          }
        })
        if (hasKeyword) {
          return course.coursePriority
        }
      })
    }
  },
  methods: {
    // Helper method to track the keywords associated with the selected goals
    // Returns array of strings (the keywords)
    keywordsSelected: function () {
      var keywords = []
      this.goalsSelected.filter(function (goal) {
        goal.goalKeywords.filter(function (keyword) {
          if (keywords.indexOf(keyword) === -1) {
            keywords.push(keyword)
          }
        })
      })
      return keywords
    },
    // Function to drive template logic on Hero content
    // Sets showCourses to move user between steps
    toggleCourseOptions: function () {
      this.showCourses = !this.showCourses
    },
    // Function to drive template logic on "Remind Me Later" modal
    toggleSignup: function () {
      this.showSignup = !this.showSignup
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
@import "./style/bartendr-theme.scss";


// Styles for Modal
#sign-up-overlay {
  position: fixed;
  overflow: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($ctaColorB, .9);
  transition: opacity 1s ease;
  z-index: 100;
  align-items: center;
  justify-content: center;
  @include flexContainer;
  #signup-modal {
    background: #fff;
    padding: 1rem;
    box-sizing: border-box;
    max-width: 600px;
    width: 80%;
    vertical-align: middle;
    transition: opacity 1s ease;
    text-align: center;
    .modal-content {
      text-align: center;
      margin-top: -3rem;
      padding: 0 1rem 1rem;
      box-sizing: border-box;
    }
    a.closeX {
        margin-left: auto;
        margin-right: 0;
        box-sizing: border-box;
        padding: 1rem;
        display: block;
        text-align: right;
        margin-top: -.5rem;
        font-size: 1.5rem;
      }
  }
}


// Styles for Hero
#hero {
  display: block;
  box-sizing: border-box;
  margin: 0;
  padding: 1rem;
  width: 100%;
  color: #fff;
  background: $ctaGradient, url('/static/img/bg2.jpg');
  background-size: 400% 400%, cover;
  background-position: center;
  @include ctaGradientAnimation;
  position: relative;
  nav {
    margin-right: 1rem;
    margin-left: auto;
    font-size: .8rem;
    text-align: right;
  }

  a:link, a:visited {
    color: #fff;
    font-size: .8rem;
  }

  h1 {
    text-transform: uppercase;
    font-size: .8rem;
    font-weight: 500;
    text-align: center;
  }

  #hero-content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: auto;
    max-width: $maxContentWidth;
    text-align: center;
    #hero-step1, #hero-step2 {
      text-align: center;
    }
    h2 {
      text-align: center;
      line-height: 2rem;
    }

    #best-deal {
      display: block;
      width: 400px;
      padding: 1rem;
      box-sizing: border-box;
      margin: auto;
      background: #fff;
      color: $darkBodyType;
      h3, h4 {
        color: $ctaColorA;
      }
    }

    #other-options {
      text-align: left;
      font-size:.9rem;
    }
  }

  // Style checkboxes as toggle buttons
  .goal-buttons {
    text-align: center;
    margin: auto;
  }
  .goal-button {
    @include visuallyHidden;
    &:checked + label {
      background: rgba(255,255,255,0.25);
    }

    &:focus:checked + label {
      background: rgba(255,255,255,0.25);
    }
  }
  .goal-buttons label {
    @include roundedButton;
    &:hover {
      background: rgba(255,255,255,0.10);
      cursor: pointer;
    }
  }

  #next-step, #remind-later {
    text-align: center;
  }
}



// Features Section
#features{
  text-align: center;
  #features-list {
    margin: auto;
    width: 80%;
    max-width: 960px;
    .feature {
      box-sizing: border-box;
      padding: 1rem;
      text-align: left;
    }
    // Flex into columns on larger screens
    @media screen and (min-width: $smallDevice){
      @include flexContainer
      .feature, div {
        box-sizing: border-box;
        flex-grow: 1;
        width: 50%;
      }
    }
  }
}

// Watch Bartender/Video Section 
#example {
  #video {
    width: 80%;
    max-width: $maxContentWidth;
    display: block;
    margin: auto;
    text-align: center;
    img {
      width: 100%;
    }
  }
}


// Praise/Reviews Section

#reviews {
  text-align: center;
  #reviews-list {  
    box-sizing: border-box;
    .review {
      display: block;
      margin:auto;
      width: 80%;
      max-width: 400px;
      text-align: left;
      margin-bottom: 3rem;
      
      img {
        text-align: center;
        margin: auto;
        display: block;
      }
      
      .attributed {
        display: block;
        text-align: right;
        margin-right:0;
        margin-left: auto;
        font-size: .8rem;
        line-height: 1rem;
        font-style: italic;
      }
    }
  }

  @media screen and (min-width: $smallDevice){
      // Flex into grid for larger screens
      #reviews-list {
      @include flexContainer;
      width: 80%;
      max-width: $maxContentWidth;
      margin: auto;

      .review {
        align-self: flex-start;
        box-sizing: border-box;
        flex-grow: 1;
        width: 33%;
        margin: 0;
        padding: 1rem;

        h3 {
            height: 3rem; // Even text height for columns
            display: block;
          }
        }
      }
    }
  }


// Partners section styles
#partners {
  text-align: center;
  background: $lightAccent;
}

// Email Sign Up styles
#try-sample {
  #signup-content {
    width: 80%;
    max-width: $maxContentWidth;
    margin: auto;
    text-align: center;
    h2 {
      text-align: center;
    }
    p {
      text-align: left;
      max-width: 600px;
      display: block;
      margin: auto;
    }
  }
}

  </style>
