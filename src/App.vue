<template>
  <div id="app" class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">
          <router-link to="/">Inici</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          <router-link to="/alta">Donar d'alta un usuari</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          <router-link to="/llistat">Mostrar un llistat d'usuaris</router-link>
        </li>
      </ol>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {};
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0 auto;
  padding: 20px;
}

#header {
  text-align: center;
}
</style>










