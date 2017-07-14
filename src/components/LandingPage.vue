<template>
  <div class="landingPage">
      
    <section id="hero">
      <nav><a href="#" title="Sign In to Bartendr">Sign In</a></nav>
      <h1>Bartendr</h1>
      <div v-if="!showCourses" class="hero-content" id="hero-step1">
      <h2>A Modern Approach to your Bartender Certification. <br/>
          Quick. Legit. Actually Fun.</h2>
          <p>What are your goals?</p>
          <p v-for="goal in goalsList" class="goal-buttons">
         <input type="checkbox" class="goal-button" v-model="goal.selected" v-bind:id="goal.goalID" v-bind:true-value="true" v-bind:false-value="false"/>
          <label v-bind:for="goal.goalID">{{ goal.goalName }}</label>
        </p>
        <p id="next-step"  v-on:click.prevent="toggleCourseOptions" v-if="this.goalsSelected.length"><a href="">Next &gt;</a></p>
        <p id="remind-later" v-on:click.prevent="showEmailModal" v-else><a href="">Remind Me Later</a></p>
      </div>

  <div v-else id="hero-step2" class="hero-content">
    <h3>Your Goals</h3>
    <p v-for="goal in goalsSelected">
        {{ goal.goalName }}
    </p>

    <div id="best-option" >
      <h3>Top Option<span v-if="bestCourse.length > 1">s</span> for You</h3>

      <div class="option" v-for="course in bestCourse">
        <h4>${{ course.coursePrice }} {{ course.courseName }}</h4>
        <p>{{ course.courseDescription }}</p>
      </div>

      

    </div>
    <div id="other-options">
        <h3>Other Options</h3>
      <div class="course-detail" v-for="course in coursesSelected">
      <p v-if="!course.coursePriority" class="course-name"><a href="#">${{ course.coursePrice }} {{ course.courseName }} &gt;</a><br/>
      <span class="course-description">{{ course.courseDescription}}</span></p></div>
    </div>
<p id="next-step"  v-on:click.prevent="toggleCourseOptions" v-if="this.goalsSelected.length"><a href="">&lt; Change Goals</a></p>
    </div>
  </section>
      
      <section id="features-list">
      <div class="feature" v-for="feature in features">
      <h3>{{ feature.featureTitle }}</h3>
        <p>{{ feature.featureDetail }}</p>
      </div>
      <div></div>
    </section>


    <section id="reviews-list">

      <div class="review" v-for="review in reviews">
        <img v-bind:src="review.img" width="100" height="100"/>
        <h3>{{ review.reviewTitle }}</h3>
        <p>{{ review.fullReview }}</p>
        <div class="attributed">{{ review.reviewerName }} from {{ review.reviewerLocation }} <br/>
          <span class="credential">{{ review.reviewerJobTitle }} at {{ review.reviewerWorkPlace }}</span></div>
      </div>
    </section>

    <section id="sample-signup">
    <div id="email-signup">
        <p><label for="sample-signup">Email Address</label></p>
        <p><input name="sample-signup" type="email" placeholder="futuremixologist@email.com" /></p>
        <input type="submit" value="Sign up for a Sample" />
      </div>  
    </section>
  </div>
</template>

<script>

import courseList from '@/assets/courseList.json'
import featuresList from '@/assets/features.json'
import reviewsData from '@/assets/praise.json'
import goalsList from '@/assets/goals.json'

export default {
  name: 'landingPage',
  data () {
    return {
      goalsList: goalsList,
      courses: courseList,
      reviews: reviewsData,
      features: featuresList,
      selectedKeywords: [],
      showCourses: false,
      isManager: false
    }
  },
  computed: {
    goalsSelected: function () {
      return this.goalsList.filter(function (goal) {
        return goal.selected
      })
    },
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
    bestCourseManager: function () {
      var keywords = this.keywordsSelected()

      return this.courses.filter(function (course) {
        if (course.courseKeywords.indexOf('manager') > -1 && keywords.indexOf('manager') > -1) {
          return course.coursePriority
        }
      })
    },

    bestCourse: function () {
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
    toggleCourseOptions: function () {
      this.showCourses = !this.showCourses
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
@import "./style/bartendr-theme.scss";


// Styles for Hero
#hero {
  display: block;
  box-sizing: border-box;
  margin: 0;
  padding: 1rem;
  width: 100%;
  color: #fff;
  background: $ctaGradient, url('/static/img/bg1.jpg');
  background-size: 400% 400%, cover;
  @include ctaGradientAnimation;
  
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

  .hero-content {
    padding: 1rem 0;
    width: 80%;
    margin: auto;
    max-width: $maxContentWidth;
    text-align: center;
    
     h2 {
      text-align: center;
      line-height: 2rem;
    }

    #best-option {
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


}

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

// Features Section

#features-list {
  margin: auto;
  width: 80%;
  max-width: 960px;
 .feature {
    box-sizing: border-box;
    padding: 1rem;
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


// Praise Section

#reviews-list {
  border-top: solid 6px $lightAccent;
  box-sizing: border-box;
  padding-top: 3rem;
  
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
      font-style: italic;
      
      .credential {
        font-size: .6rem;
      }
    }
  }

  @media screen and (min-width: 768px){
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

</style>
