// Aquí tindrem el store

import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

//STATE = llistat de variables que defineixen meu estat
export default new Vuex.Store({
    state:{
        llistaPersones: [] ,
        usuari: null,
        position: null,
        lastUserID: 1
    },
    getters: {

        getUserList: state => state.llistaPersones ,
        hihaUsuaris: state => state.llistaPersones.length,

        getUserId: state => state.usuari.id,
        getUserNom: state => state.usuari.nom,
        getUserCognom1: state => state.usuari.cognom1,
        getUserCognom2: state => state.usuari.cognom2,
        getUserDNI: state => state.usuari.dni            

        

    },
    mutations: {
    //Forma de modificar el valor de les variables  
    //Els canvis d'estat els farem mitjançant mutacions  
    //Us: this.$store.commit("increment","parametre");
    //EL primer parametre és state
        afegeixPersona:function(state, persona)
        {
            persona.id = state.lastUserID ;
            state.lastUserID++;
            state.llistaPersones.push(persona);
        },
        loadUser:function(state,id){     
            
            state.usuari = state.llistaPersones.find(persona => persona.id === id) 
            state.position = state.llistaPersones.indexOf(state.usuari);             
            
        },
        editUser:function(state, persona){  
            alert("guardant" +persona.id)
            state.llistaPersones[state.position] =persona;
            /*state.llistaPersones[persona.id-1] = persona;*/
        },
        eliminaPersona:function(state, persona){
            
            let posicio = state.llistaPersones.indexOf(persona);            
            state.llistaPersones.splice(posicio,1);        
            //alert(id);
            //state.llistaPersones = this.usuaris.filter((item) => item.id !== id);
        },

    }, 
    actions:{
    //Com mutacions però asíncrones.
    //Us: this.$store.dispatch("increment");
    //Parámetre implicit: context

    }

})


