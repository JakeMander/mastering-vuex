<template>
  <div id="container">
    <div id="nav">
      <router-link class="brand" :to="{name: 'EventList'}">
        <h1 class="brand">Jake's Do Good Stuff Site</h1>
      </router-link>
      <div class="nav-right">
        <router-link :to="{ name: 'EventList'} ">Events</router-link> |
        <router-link :to="{ name: 'About' }">About</router-link> |
        <router-link :to="{ name: 'EventCreate' }">Create</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  flex-direction: row;
  padding: 10px;
  text-align: left;
  margin-bottom: 2rem;
  box-shadow: rgba(0, 0, 0, .2) 0px 2px 0px 0px;
}

.brand {
   color: #2c3e50;
   text-decoration: none;
   display: inline;
}

.brand .h1 {
  margin: 0px;
}

#nav .nav-right {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: flex-end;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h4 {
  font-size: 20px;
}
</style>
