import Vue from 'vue';
import VueRouter from 'vue-router';
import Formulari from '@/components/Formulari.vue'
import LlistatUsuaris from '@/components/LlistatUsuaris.vue'
import HomePage from  '@/components/HomePage.vue'
import ModificarUsuari from  '@/components/ModificarUsuari.vue'


Vue.use(VueRouter);

let router = new VueRouter({
    base: '/',
    mode: 'history', //Permet navegar endavant i endarrere al navegador
    routes: [
        { path: '/', component: HomePage },
        { path: '/alta', component: Formulari },
        { path: '/edita/:id', component: ModificarUsuari },
        { path: '/llistat', component: LlistatUsuaris },
    ]
});

export default router