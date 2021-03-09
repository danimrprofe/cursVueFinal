<template>
    <div>
        <div class="jumbotron">
            <h1 class="display-3">Benvingut!</h1>
            <p class="lead">Aquí practicarem amb <b>Vue.js</b></p>
            <hr class="my-2">
            <p>Tot això està dins App.vue, el component principal. Aquí importarem altres components que anirem creant dins el curs</p>
            <p>Aquest projecte està fet amb Vue.js i Bootstrap</p>
  
            </div>

                      <p><span class="badge badge-primary">Vuex </span> ens permet guardar l'estat a un magatzem o store separat</p>
            <p>Amb <span class="badge badge-primary">Vue-router</span> hem pogut definir una navegació per l'aplicació</p>
            <p>També utilitzarem <span class="badge badge-primary">mixins</span>, que ens permet enmagatzemar part de codi de Vue per a poder reutilitzar-lo a en múltiples components alhora, evitant repetir blocs de codi a cada un d'ells
            </p>

            
            <p>Aquí dalt hi ha el component de navegació.<span class="badge badge-primary">nav</span> Utilitzarem <span class="badge badge-primary">router</span> per a navegar pel site sense recarregar la pàgina. </p>
            <p>Aquí a sota hi ha unes etiquetes <span class="badge badge-primary">&lt;router-view&gt;</span> on es carregarà el component corresponent a la ruta triada</p>
  
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>