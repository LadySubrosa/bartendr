<template>
  <div id="app">

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Rubik:400,400i,500,500i');

body {
  padding: 0;
  margin: 0;
  font-family: 'Rubik', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #4A4A4A; /* Body copy */
  font-size: 18px; /* Body Font-Size */
}

@media screen and (min-width: 768px;) {
  body {
    font-size: 14px;
  }
}

#app {

}



</style>
