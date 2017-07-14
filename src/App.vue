<template>
  <div id="app">
    <!-- Header Nav. Don't Show on LandingPage. -->
    <nav v-if="$route.meta.Bartendr"> 
        <a href="#">Sign In</a>
        <a href="#">About Aceable</a>
        <a href="#">Detailed Course List</a>
        <a href="#">Terms &amp; Conditions</a>
        <a href="#">Privacy Policy</a>
    </nav>

    <router-view></router-view>
  
    <!-- Footer Nav. Show on all pages. -->
    <footer>
      <nav>
        <a href="#">Sign In</a>
        <a href="#">About Aceable</a>
        <a href="#">Detailed Course List</a>
        <a href="#">Terms &amp; Conditions</a>
        <a href="#">Privacy Policy</a>
      </nav>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>


<style lang="scss">
@import "./style/bartendr-theme.scss";


body {
  padding: 0;
  margin: 0;
  font-family: $font;
  @include niceFont;
  color:$darkBodyType;
  line-height: $lineHeight;
  font-size: $bodyFontSizeMobile; /* Body Font-Size */
  @media screen and (min-width: 768px) {
    font-size: $bodyFontSize;
  }
  footer {
    background-color: $altLightAccent;
    font-size: .8rem;
    text-align: center;
    padding: 2rem;
    nav {
      display: block;
      a:link, a:visited {
        display:block;
        color: $darkLinkType;
        text-decoration: underline;
      }
    }
  }
  input[type="submit"], button {
    @include roundedButtonCTA;
    font-size: 1.2rem;
  }
  label {
      font-size: .8rem;
      text-transform: uppercase;
      margin: 1rem auto;
      display: block;
    }
  input {
    display: block;
    margin: 1rem auto;
    &[type="email"], &[type="text"] {
      width: 80%;
      max-width: 300px;
      padding: .5rem;
      font-size: 1rem;
      text-align: center;
      -webkit-appearance: none;
      background: #fff;
      color: $darkBodyType;
      border: solid 1px $ctaColorA;
      border-radius: 6px;
    }
  }
  a.cta {
    @include roundedButtonCTA;
    text-decoration: none;
    font-size: 1.1rem !important;
    line-height: 1.5rem;
  }
  section {
    padding: 2rem 0;
    text-align: center;
    box-sizing: border-box;
  }
}



</style>
