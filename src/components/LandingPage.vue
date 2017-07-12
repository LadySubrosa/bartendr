<template>
  <div class="landingPage">
      
    <div id="hero">
      <h1>Bartendr</h1>
      <h2>A Modern Approach to your Bartender Certification. <br/>
          Quick. Legit. Actually Fun.</h2>
          <p v-for="goal in goalsList" class="goal-buttons">
         <input type="checkbox" class="goal-button" v-model="goal.selected" v-bind:id="goal.goalID" v-bind:true-value="true"
  v-bind:false-value="false"/>
          <label v-bind:for="goal.goalID">{{ goal.goalName }}</label>
        </p>
        <p id="next-step" v-if="this.goalsSelected.length"><a href="">Next</a></p>
        <p id="remind-later" v-else><a href="">Remind Me Later</a></p>

<h3>Your Goals</h3>
<p v-for="goal in goalsSelected">
  {{ goal.goalName }}
</p>
        <h3>Courses for your goals</h3>
    <p v-for="course in coursesSelected">
      <strong v-if="course.coursePriority">Best Deal <br/></strong>
      ${{ course.coursePrice }} {{ course.courseName }}
      <br>{{ course.courseDescription}}</p>

    </div>
      
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
      selectedKeywords: []
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
        var hasCourse = false
        keywords.forEach(function (keyword) {
          if (course.courseKeywords.indexOf(keyword) > -1) {
            hasCourse = true
          }
        })
        return hasCourse
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
@import "./style/bartendr-theme.scss";

/* Styles for Hero */
#hero {
  display: block;
  box-sizing: border-box;
  margin: 0 0 3rem;
  width: 100%;
  color: #fff;
  padding: 3rem 0;
  background: $ctaGradient, url('/static/img/bg1.jpg');
  background-size: 400% 400%, cover;
  @include ctaGradientAnimation;
  
  h1 {
    text-transform: uppercase;
    font-size: .8rem;
    font-weight: 500;
    text-align: center;
  }
  
   h2 {
    text-align: center;
  }

  a:link, a:visited {
    color: #fff;
    font-size: .8em;
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

label {
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
