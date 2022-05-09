<template>
  <nav>
      <ul class="menu">
        <li><router-link to="/">Home</router-link> </li> 
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/candidates">candidates</router-link></li>
      </ul>
  </nav>
  <router-view/>
</template>

<style  >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
    background: var(--txt);
    color: var(--bg);
}

nav a {
    color: var(--bg);
    text-decoration: none;
    display:block;
    padding: 1rem;
}

nav a:hover {
    background: var(--hover);
}

.menu {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: right;
    gap: 1rem;
    padding: 0;
    margin: 0;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
