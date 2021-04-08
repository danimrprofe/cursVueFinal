<template>
  <div class="llistatUsuaris">
    <h2>Component Llistat de usuaris</h2>
    <div>
      <div v-if="$route.query.afegit" class="alert alert-success" role="alert">
        S'ha afegit 1 usuari nou al llistat
      </div>

      <div v-else class="alert alert-danger" role="alert">
        S'ha esborrat 1 usuari del llistat
      </div>

      <p>
        Està creat dins l'arxiu <b>LlistatUsuaris.vue</b>. Esteim agafant el
        usuaris de l'store
      </p>
      <p>Llista usuaris registrats:</p>

      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Primer llinatge</th>
            <th>Segon llinatge</th>
            <th>DNI</th>
            <th>Esborrar</th>
          </tr>
        </thead>
        <!-- practicando list rendering -->
        <tr v-for="user in this.$store.getters.getUserList" :key="user.nom">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.nom }}</td>
          <td>{{ user.cognom1 }}</td>
          <td>{{ user.cognom2 }}</td>
          <td>{{ user.dni }}</td>
          <td>
            <button class="btn btn-danger" @click="eliminarPersona(user)">
              Eliminar
            </button>
            <button class="btn btn-warning" @click="editaUsuari(user.id)">
              Editar
            </button>
          </td>
        </tr>
      </table>
    </div>
    <div class="alert alert-warning">
      <p>No hi ha usuaris registrats</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LlistatUsuaris",
  data: function () {
    return {};
  },

  methods: {
    eliminarPersona: function (persona) {
      this.$store.commit("eliminaPersona", persona);
      this.$router.push("/llistat?esborrat=true");
    },
    editaUsuari: function (id) {
      this.$store.commit("loadUser", id);
      this.$router.push("/edita/" + id);
    },
  },
  computed: {
    usuarisregistrats: () => this.$store.getters.getLlistatUsuaris,
  },

  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
