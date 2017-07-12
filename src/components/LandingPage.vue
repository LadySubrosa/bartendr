<template>
  <div class="landingPage">
      
    <div id="hero">
      <h1>Bartendr</h1>
      <h2>A Modern Approach to your Bartender Certification. <br/>
          Quick. Legit. Actually Fun.</h2>
          <p v-for="goal in goalsList" class="goal-buttons">
         <input type="checkbox" class="vis-hidden goal-button" v-model="goal.selected" v-bind:id="goal.goalID" v-bind:true-value="true"
  v-bind:false-value="false"/>
          <label v-bind:for="goal.goalID">{{ goal.goalName }}</label>
        </p>
        <p id="next-step" v-if="this.goalsSelected"><a href="">Next</a></p>
        <p id="remind-later" v-else><a href="">Remind Me Later</a></p>

<h3>Your Goals</h3>
<p v-for="goal in goalsSelected">
  {{ goal.goalName }}
</p>
        <h3>Courses for your goals</h3>
    <p v-for="course in coursesSelected">
      <span v-if="course.coursePriority">Best Deal <br/></span>
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

<style scoped>


/* Styles for Hero */
#hero h1 {
  text-transform: uppercase;
  font-size: .8rem;
  font-weight: 500;
  text-align: center;
}

#hero h2 {
  text-align: center;
}

#hero {
  display: block;
  box-sizing: border-box;
  margin: 0 0 3rem;
  width: 100%;
  color: #fff;
  padding: 3rem 0;
  background: linear-gradient(180deg, rgba(49, 15, 93, 0.9), rgba(99,26,81,0.9)), url('/static/img/bg2.jpg');
  background-size: 400% 400%, cover;
  -webkit-animation: SubtleGradientAnimation 20s ease infinite;
  -moz-animation: SubtleGradientAnimation 20s ease infinite;
  -o-animation: SubtleGradientAnimation 20s ease infinite;
  animation: SubtleGradientAnimation 20s ease infinite;
}

/* CSS-Animation for Gradient */
 @-webkit-keyframes SubtleGradientAnimation {
      0%{background-position:50% 0%}
      50%{background-position:50% 100%}
      100%{background-position:50% 0%}
  }
  @-moz-keyframes SubtleGradientAnimation {
      0%{background-position:50% 0%}
      50%{background-position:50% 100%}
      100%{background-position:50% 0%}
  }
  @-o-keyframes SubtleGradientAnimation {
      0%{background-position:50% 0%}
      50%{background-position:50% 100%}
      100%{background-position:50% 0%}
  }
  @keyframes SubtleGradientAnimation { 
      0%{background-position:50% 0%}
      50%{background-position:50% 100%}
      100%{background-position:50% 0%}
  }

.vis-hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.goal-buttons {
  text-align: center;
  margin: auto;

}

label {
  margin: .5rem;
  padding: 5px 1rem;
  border-radius: 30px;
  border: 1px solid #fff;
  text-align: center;
  display: inline-block;
}

label:hover {
  background: rgba(255,255,255,0.10);
  cursor: pointer;
}

input:checked + label {
  background: rgba(255,255,255,0.25);
}

input:focus:checked + label {
  background: rgba(255,255,255,0.25);
}

#next-step, #remind-later {
    text-align: center;
}

#hero a:link, #hero a:visited, #hero a:active, #hero a:hover {
  color: #fff;
  font-size: .8em;
}


/* Styles for Features section */
#features-list {
  margin: auto;
  width: 80%;
  max-width: 960px;
}

#features-list .feature {
  box-sizing: border-box;
  padding: 1rem;

}

/* Flex into columns for larger devices */
@media screen and (min-width: 768px){
  #features-list {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    
    -webkit-flex-flow: row wrap;
    flex-wrap: wrap;
  }
  #features-list .feature, #features-list div {
    box-sizing: border-box;
    flex-grow: 1;
    width: 50%;
  }
}

/* Styles for Praise section */
#reviews-list {
  border-top: solid 6px #E7D7EB; /* light purple */
  box-sizing: border-box;
  padding-top: 3rem;
}

.review {
  display: block;
  margin:auto;
  width: 80%;
  max-width: 400px;
  text-align: left;
  margin-bottom: 3rem;
}

.review img {
  text-align: center;
  margin: auto;
  display: block;
}

.review .attributed {
  display: block;
  text-align: right;
  margin-right:0;
  margin-left: auto;
  font-size: .8rem;
  font-style: italic;
}

.review .attributed .credential {
  font-size: .6rem;
}

/* Flex rows on Desktop */
@media screen and (min-width: 768px){
  #reviews-list {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    
    -webkit-flex-flow: row wrap;
    flex-wrap: wrap;
    width: 80%;
    max-width: 960px;
    margin: auto;
    align-items: flex-start;
  }

  #reviews-list .review {
    align-self: flex-start;
    box-sizing: border-box;
    flex-grow: 1;
    width: 33%;
    margin: 0;
    padding: 1rem;
  }

  /* Even text height for when they are columns */
  #reviews-list .review h3 {
    height: 3rem;
    display: block;
  }
}

</style>
