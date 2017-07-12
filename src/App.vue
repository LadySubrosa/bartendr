<template>
  <div id="app">
    <router-view></router-view>
  
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
}



</style>
