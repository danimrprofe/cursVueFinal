<template>
  <div>
    <div class="jumbotron">
      <h1 class="display-3">Gestió d'usuaris</h1>
      <p class="lead">
        Aquesta aplicació et permetrà donar d'alta, editar i esborrar els
        usuaris de la teva organització
      </p>

      <hr class="my-2" />
      <p>
        Aquesta aplicació ha estat creada amb <b>Vue.js</b> i <b>Bootstrap</b>.
        Tot això està dins App.vue, el component principal. Aquí importarem
        altres components que anirem creant dins el curs
      </p>
      <p>
        A dalt de tot tens un component de navegació que et permetrà moure per
        les diferents pàgines.
      </p>
      <p>
        Aquí davall tens un petit resum de totes les eines que he fet servir en
        aquesta aplicació.
      </p>
    </div>

    <p>
      <span class="badge badge-primary">Vuex </span> ens permet guardar l'estat
      a un magatzem o store separat
    </p>
    <p>
      Amb <span class="badge badge-primary">Vue-router</span> hem pogut definir
      una navegació per l'aplicació
    </p>
    <p>
      També utilitzarem <span class="badge badge-primary">mixins</span>, que ens
      permet enmagatzemar part de codi de Vue per a poder reutilitzar-lo a en
      múltiples components alhora, evitant repetir blocs de codi a cada un
      d'ells
    </p>

    <p>
      Aquí dalt hi ha el component de navegació.<span
        class="badge badge-primary"
        >nav</span
      >
      Utilitzarem <span class="badge badge-primary">router</span> per a navegar
      pel site sense recarregar la pàgina.
    </p>
    <p>
      Aquí a sota hi ha unes etiquetes
      <span class="badge badge-primary">&lt;router-view&gt;</span> on es
      carregarà el component corresponent a la ruta triada
    </p>
    <p>
      A la darrera part faig servir
      <span class="badge badge-primary">localStorage</span> per a emmagatzemar
      valors de variables a l'ordinador del client. Amb els mètodes mounted i
      watch faré carregar i guardar les dades a la pàgina cap i des de
      l'emmagatzemament local. Com que vull guardar una llista d'usuaris i no es
      poden guardar dades complexes, serializaré les dades.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>