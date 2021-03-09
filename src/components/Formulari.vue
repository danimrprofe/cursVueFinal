<template>

  <div class="formulari">

    <h2>Component Formulari</h2>

    <p>En aquest formulari es registran els usuaris. Està crear dins l'arxiu <b>Formulari.vue</b></p>
    <p>Esteim guardant els usuaris al <b>store</b></p>

    <h3>Formulari de registre</h3>

    <div class="card">
      <div class="card-header">
        Alta d'usuaris
      </div>
    <div class="card-body">
      <h5 class="card-title">Instruccions</h5>
      <p class="card-text">En aquest formulari es registran els usuaris. Està crear dins l'arxiu Formulari.vue
          Esteim guardant els usuaris al store</p>
      <div v-if="!validado" class="alert alert-danger" role="alert">
  Falten dades per emplenar
</div>
  <div v-else class="alert alert-success" role="alert">
    S'han emplenat totes les dades
  </div>
       
    <p>Aquí tens el formulari per registrar-te:</p>

    <form @submit.prevent="desar()"> <!-- Evitam recarrega de la pagina -->

      <!-- Si hi ha errors, es mostren els errors -->
      <p v-if="errors.length">
        <b>Per favor, corregeix les següents errades::</b>
        <ul><li v-for="error in errors" :key="error">{{ error }}</li></ul>
      </p>   


      <!-- <div v-if="$route.query.idUsuari" v-for="usuari in $store.getters.getUsuariAmbId(id)" :key="usuari.nom"> -->
             <!-- Mostran els camps del formulari -->
      <div class="form-group row">
        <label for="nom" class="col-sm-2 col-form-label">Nom</label>
        <div class="col-sm-10">
          <input 
            @click="espotenviar()" 
            required="" 
            v-model="nom" 
            class="form-control" 
            placeholder="El teu nom" 
          />
 

        </div>
      </div>

      <div class="form-group row">
        <label for="cognom1" class="col-sm-2 col-form-label">Cognom 1</label>
        <div class="col-sm-10">
          <input @click="espotenviar()" required v-model="cognom1" class="form-control"  placeholder="Primer llinatge" />               
        </div>
      </div>

      <div class="form-group row">
        <label for="cognom2" class="col-sm-2 col-form-label">Cognom 2 </label>
        <div class="col-sm-10">
          <input @click="espotenviar()" required v-model="cognom2" class="form-control"  placeholder="Segon llinatge" />               
        </div>
      </div>

      <div class="form-group row">
        <label for="dni" class="col-sm-2 col-form-label">Cognom 2 </label>
        <div class="col-sm-10">
          <input @click="espotenviar()" required v-model="dni" class="form-control"  placeholder="DNI amb lletra" />               
        </div>
      </div> 

      <div class="form-group row">
        <div class="col-sm-10 offset-sm-2">
          <input name="botoenviar" type="submit"  value="Desa les dades" class="btn-primary"/> &nbsp; 
          <button @click="carregarProves()" type="button" class="btn btn-secondary">Carregar dades de prova</button>     
        </div>
      </div>
    </form>
      
    </div>
</div>
    
  </div>
</template>

<script>
export default {
  name: "Formulari",
  data: function () {
    return {
      validado: false,
      errors: [],
      nom: null,
      cognom1: null,
      cognom2: null,
      dni: null,
      /*Array d'usuaris en JSON*/
      usuaris: [
        /* exemple de format */
        /* { id : "1", nom: "Chiquito", cognom1: "De la", cognom2: "Calzada", DNI: ""}, */
      ],
      usuari: null
    };
  },


  methods: {
    carregarUsuari: function(id) {      
      this.usuari = this.$store.getters.getUsuariAmbId(id) // -> { id: 2, text: '...', done: false }      
      this.nom = this.usuari.nom;
      this.cognom1 = this.usuari.cognom1;
      this.cognom2 = this.usuari.cognom2;
      this.dni = this.usuari.dni;
    },
    desar: function () {
      this.checkForm();     
      this.$store.commit("afegeixPersona", { nom: this.nom, cognom1: this.cognom1, cognom2: this.cognom2, dni: this.dni } );
      this.esborraFormulari();      
      this.$router.push('/llistat?afegit=true');  
      /* Guardar el darrer usuari al local storage*/
      /*const parsed = JSON.stringify(this.usuari);
      localStorage.setItem('usuari', parsed);*/
    },
      carregarProves: function () {
      
      this.$store.commit("afegeixPersona", { nom: 'Homer', cognom1: 'Simpson', cognom2: 'Simpson', dni:'00000000X' } );
      this.$store.commit("afegeixPersona", { nom: 'Marge', cognom1: 'Bouvier', cognom2: 'Bouvier', dni:'00000001X' } );
      this.$store.commit("afegeixPersona", { nom: 'Homer', cognom1: 'Simpson', cognom2: 'Bouvier', dni:'00000002X' } );
      this.esborraFormulari();      
      this.$router.push('/llistat?afegit=true');  
      /* Guardar el darrer usuari al local storage*/

    },

    esborraFormulari: function () {
      this.nom = "";
      this.cognom1 = "";
      this.cognom2 = "";
      this.dni = "";
    },
    checkForm: function (e) {
      if (this.nom && this.cognom1 && this.cognom2 && this.dni) {  return true;   }
      this.errors = [];
      
      if (!this.nom) { this.errors.push("El nom és obligatori"); }
      if (!this.cognom1) { this.errors.push("El cognom1 és obligatori"); }
      if (!this.cognom2) { this.errors.push("El cognom2 és obligatori"); }
      if (!this.dni) { this.errors.push("El dni és obligatori"); }

      e.preventDefault();
    },
    eliminar: function (idUsuari) {
      this.$store.commit("eliminaPersona",idUsuari);   
      
    },
    espotenviar: function () {
      if (this.nom == undefined || this.nom == "") {
        this.validado = false;
        return;
      }
      if (this.cognom1 == undefined || this.cognom1 == "") {
        this.validado = false;
        return;
      }
      if (this.cognom2 == undefined || this.cognom2 == "") {
        this.validado = false;
        return;
      }
      if (this.dni == undefined || this.dni == "") {
        this.validado = false;
        return;
      }
      this.validado = true;
      return;
    },
  },
  /* vigilarem variables de la nostra aplicacio */
  /*   watch: {
    nom(){
      alert("watcher " + this.nom)
    },
    dni(nuevoValor, valorAnterior){
      alert(nuevoValor);
      alert(valorAnterior);      
    } */

  computed: {
    computed1: function () {
      return "això és un computed. ";
    },
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
